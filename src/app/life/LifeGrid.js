'use client';

import { useState, useEffect } from 'react';

export default function LifeGrid({ hobbies }) {
    const [selectedHobby, setSelectedHobby] = useState(null);
    const [currentImageIndex, setCurrentImageIndex] = useState(0);

    const openModal = (hobby) => {
        setSelectedHobby(hobby);
        setCurrentImageIndex(0);
    };

    const closeModal = () => {
        setSelectedHobby(null);
    };

    const nextImage = () => {
        if (selectedHobby) {
            setCurrentImageIndex((prevIndex) => (prevIndex + 1) % selectedHobby.images.length);
        }
    };

    const prevImage = () => {
        if (selectedHobby) {
            setCurrentImageIndex((prevIndex) => (prevIndex - 1 + selectedHobby.images.length) % selectedHobby.images.length);
        }
    };

    useEffect(() => {
        const handleEsc = (event) => {
            if (event.key === 'Escape') closeModal();
        };
        window.addEventListener('keydown', handleEsc);

        if (selectedHobby) {
            document.body.style.overflow = 'hidden';
        } else {
            document.body.style.overflow = 'auto';
        }

        return () => {
            window.removeEventListener('keydown', handleEsc);
        };
    }, [selectedHobby]);

    return (
        <>
            <div className="mt-20 grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                {hobbies.map((hobby, index) => (
                    <div
                        key={index}
                        className="group relative h-72 rounded-xl shadow-lg overflow-hidden cursor-pointer"
                        onClick={() => openModal(hobby)}
                    >
                        <img src={hobby.images[0].src} alt={hobby.title} className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110" />
                        <div className="absolute inset-0 bg-black/50 flex items-center justify-center transition-opacity duration-500 group-hover:bg-black/60">
                            <h3 className="text-2xl font-bold text-white text-center px-4">{hobby.title}</h3>
                        </div>
                    </div>
                ))}
            </div>

            {selectedHobby && (
                <div
                    className="fixed inset-0 bg-black/80 z-[100] flex items-center justify-center p-4 animate-fade-in"
                    onClick={closeModal}
                >
                    <div
                        className="bg-white rounded-xl shadow-2xl max-w-4xl w-full flex flex-col md:flex-row overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        <div className="md:w-1/2 relative">
                            <img src={selectedHobby.images[currentImageIndex].src} alt={selectedHobby.images[currentImageIndex].caption} className="w-full h-full object-cover" />
                            {selectedHobby.images.length > 1 && (
                                <>
                                    <button onClick={(e) => { e.stopPropagation(); prevImage(); }} className="absolute left-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" /></svg>
                                    </button>
                                    <button onClick={(e) => { e.stopPropagation(); nextImage(); }} className="absolute right-2 top-1/2 -translate-y-1/2 bg-black/50 text-white p-2 rounded-full hover:bg-black/75 transition-colors">
                                        <svg className="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                                    </button>
                                    <div className="absolute bottom-2 left-1/2 -translate-x-1/2 bg-black/50 text-white text-sm px-3 py-1 rounded-full">
                                        {currentImageIndex + 1} / {selectedHobby.images.length}
                                    </div>
                                </>
                            )}
                        </div>
                        <div className="md:w-1/2 p-8 flex flex-col">
                            <h3 className="text-3xl font-bold text-gray-900 mb-2">{selectedHobby.title}</h3>
                            <p className="text-gray-600 mb-4 leading-relaxed flex-grow">{selectedHobby.description}</p>
                            <p className="text-gray-800 font-semibold italic mt-2">"{selectedHobby.images[currentImageIndex].caption}"</p>
                            <button
                                onClick={closeModal}
                                className="mt-6 bg-blue-600 text-white px-6 py-2 rounded-lg hover:bg-blue-700 transition-colors self-start"
                            >
                                Close
                            </button>
                        </div>
                    </div>
                </div>
            )}
        </>
    );
} 