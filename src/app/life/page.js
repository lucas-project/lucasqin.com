import fs from 'fs/promises';
import path from 'path';
import Header from '../components/Header';
import Footer from '../components/Footer';
import VideoCarouselSection from '../components/VideoCarouselSection';
import LifeGrid from './LifeGrid';

// Helper function to format titles from folder names
const formatTitle = (fileName) => {
    return fileName.replace(/-/g, ' ').replace(/\b\w/g, l => l.toUpperCase());
};

// Helper function to format captions from file names
const formatCaption = (fileName) => {
    return formatTitle(path.parse(fileName).name);
};

const defaultHobbiesData = {
    "Photography": {
      description: "I love capturing moments and telling stories through my camera lens. Exploring new places and finding unique perspectives is something I truly enjoy. It's a way to document my travels and see the world in a different light.",
    },
    "Hiking And Outdoor": {
      description: "Activies like hiking, camping, kayaking, and jogging are my favorite ways to relax and enjoy the outdoors.",
    },
    "Stock Trading": {
      description: "I focus on the long-term growth of companies, and I believe in the power of compounding. I'm not afraid to hold stocks for a long time, and I'm not afraid to sell them when they're overvalued.",
    },
    "Motorcycle Riding": {
      description: "Motorcycle riding is a fun way to stay active and explore new places. It's a great way to get some exercise and enjoy the outdoors.",
    },
    "Skateboarding": {
      description: "Skateboarding is a fun way to stay active and explore new places. It's a great way to get some exercise and enjoy the outdoors.",
    },
    "Badminton": {
      description: "I enjoy playing badminton with my friends. It's a great way to stay active and have fun.",
    },
    "Road-Trips": {
      description: "I love driving and exploring new places. I've driven from Melbourne to Sydney, and I've driven from Melbourne to Brisbane.",
    },
    "Socialising": {
        description: "connecting with friends and family is important to me. I love going out for a meal with friends, or going to the movies with family.",
    }
};

async function getHobbies() {
    const hobbiesDir = path.join(process.cwd(), 'public/hobbies');
    const hobbyKeys = Object.keys(defaultHobbiesData);

    try {
        const hobbies = await Promise.all(
            hobbyKeys.map(async (hobbyName) => {
                const hobbyPath = path.join(hobbiesDir, hobbyName);
                let imageFiles = [];

                try {
                    const files = await fs.readdir(hobbyPath);
                    imageFiles = files.filter(file => /\.(jpg|jpeg|png|gif|webp)$/i.test(file));
                } catch (error) {
                    // Directory doesn't exist, which is fine.
                }

                let description = defaultHobbiesData[hobbyName]?.description || `A collection of images for ${formatTitle(hobbyName)}.`;
                let captions = {};

                const metaPath = path.join(hobbyPath, 'meta.json');
                try {
                    const metaContent = await fs.readFile(metaPath, 'utf-8');
                    const metaData = JSON.parse(metaContent);
                    if(metaData.description) description = metaData.description;
                    if(metaData.captions) captions = metaData.captions;
                } catch (error) {
                    // meta.json doesn't exist or is invalid, use defaults.
                }
                
                let images = imageFiles.map(imageFile => ({
                    src: `/hobbies/${hobbyName}/${imageFile}`,
                    caption: captions[imageFile] || formatCaption(imageFile),
                }));

                if (images.length === 0) {
                    images.push({
                        src: 'https://placehold.co/600x400/EEE/31343C?text=Coming+Soon',
                        caption: 'Images coming soon for this hobby.'
                    });
                }

                return {
                    title: formatTitle(hobbyName),
                    description,
                    images,
                };
            })
        );
        
        return hobbies;

    } catch (error) {
        console.error("Could not process hobbies:", error);
        return Object.keys(defaultHobbiesData).map(hobbyName => ({
            title: formatTitle(hobbyName),
            description: defaultHobbiesData[hobbyName]?.description,
            images: [{
                src: 'https://placehold.co/600x400/EEE/31343C?text=Error',
                caption: 'Error loading images.'
            }]
        }));
    }
}

export default async function Life() {
    const hobbies = await getHobbies();

    return (
        <div className="min-h-screen bg-gray-50">
            <Header />
            <VideoCarouselSection />
            <main className="py-20 pt-32">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center">
                        <h1 className="text-4xl md:text-6xl font-bold text-gray-900 leading-tight">
                            My Life & Hobbies
                        </h1>
                        <p className="mt-4 text-lg text-gray-600 max-w-2xl mx-auto">
                            A glimpse into my life outside of coding. Here are some of the things I'm passionate about.
                        </p>
                    </div>
                    <LifeGrid hobbies={hobbies} />
                </div>
            </main>
            <Footer />
        </div>
    );
} 