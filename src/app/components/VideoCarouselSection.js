'use client';

import Slider from 'react-slick';

const VideoCarouselSection = () => {
    const settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };

    const videos = [
        {
            id: '473qU53Mw7c',
            title: 'YouTube video player 1',
        },
        {
            id: '534_epzIBEo',
            title: 'YouTube video player 2',
        },
    ];

    return (
        <section className="bg-white dark:bg-gray-900 mt-16 animate-fade-in">
            <div className="py-8 px-4 mx-auto max-w-screen-xl lg:py-12">
                <Slider {...settings}>
                    {videos.map((video) => (
                        <div key={video.id}>
                            <div className="aspect-w-16 aspect-h-9">
                                <iframe
                                    className="w-full h-full rounded-lg shadow-lg"
                                    src={`https://www.youtube.com/embed/${video.id}?si=custom-param`}
                                    title={video.title}
                                    frameBorder="0"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                                    referrerPolicy="strict-origin-when-cross-origin"
                                    allowFullScreen
                                ></iframe>
                            </div>
                        </div>
                    ))}
                </Slider>
            </div>
        </section>
    );
};

export default VideoCarouselSection; 