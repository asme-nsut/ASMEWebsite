import { useState } from "react";
import * as VscIcons from "react-icons/vsc";

const ASMEgallery = () => {
    const galleryImages = [
        {
            img: "https://source.unsplash.com/random/1",
        },
        {
            img: "https://source.unsplash.com/random/2",
        },
        {
            img: "https://source.unsplash.com/random/3",
        },
        {
            img: "https://source.unsplash.com/random/4",
        },
        {
            img: "https://source.unsplash.com/random/5",
        },
        {
            img: "https://source.unsplash.com/random/6",
        },
        {
            img: "https://source.unsplash.com/random/7",
        },
        {
            img: "https://source.unsplash.com/random/8",
        },
        {
            img: "https://source.unsplash.com/random/9",
        },
        {
            img: "https://source.unsplash.com/random/10",
        },
        {
            img: "https://source.unsplash.com/random/11",
        },
        {
            img: "https://source.unsplash.com/random/12",
        },
    ];
    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    const handleOpenModal = (index) => {
        console.log("clicked");
        setSlideNumber(index);
        setOpenModal(true);
    };

    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1);
    };

    const nextSlide = () => {
        slideNumber === galleryImages.length-1
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
    };

    return (
        <div className="flex flex-col justify-center content-center justify-items-center">
            <h1 className="flex justify-center content-center text-7xl mt-5 font-semibold text-gray-900">
                Gallery
            </h1>
            {openModal && (
                <div class="fixed top-0 left-0 right-0 bottom-0 flex flex-row items-center justify-center z-50 max-w-full	max-h-full bg-stone-900/[0.7]">
                    <VscIcons.VscClose
                        className="fixed cursor-pointer top-10 right-10 h-10 w-10 text-white transition-all hover:text-blue-500"
                        onClick={handleCloseModal}
                    />
                    <VscIcons.VscChevronLeft
                        className="fixed cursor-pointer top-1/2 left-10 h-10 w-10 text-white transition-all hover:text-blue-500"
                        onClick={prevSlide}
                    />
                    <VscIcons.VscChevronRight
                        className="fixed cursor-pointer top-1/2 right-10 h-10 w-10 text-white transition-all hover:text-blue-500"
                        onClick={nextSlide}
                    />

                    <div className="w-[(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center">
                        <img
                            className="max-w-full max-h-full"
                            src={galleryImages[slideNumber].img}
                            alt=""
                        />
                    </div>
                </div>
            )}
            <hr className="flex justify-center content-center mx-auto my-8 rounded-lg bg-blue-500 h-1 w-64" />
            <div className="place-items-center max-w-[1200px] py-5 mb-5 text-black mx-auto grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 gap-5">
                {galleryImages &&
                    galleryImages.map((slide, index) => {
                        return (
                            <div className="overflow-hidden rounded">
                                <img
                                    src={slide.img}
                                    key={index}
                                    onClick={() => handleOpenModal(index)}
                                    alt=""
                                    className="shadow-[0_35px_60px_-15px_rgba(0,0,0,0.7)] animate-appear rounded hover:scale-125 duration-1000"
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ASMEgallery;
