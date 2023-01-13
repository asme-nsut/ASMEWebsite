import { useEffect, useState, useMemo } from "react";
import { VscClose, VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const ASMEgallery = () => {
    // Image source list: Source for all the images to be added should be mentioned here.
    const galleryImages = useMemo(
        () => [
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
        ],
        []
    );

    // States for carousel
    const [slideNumber, setSlideNumber] = useState(0);
    const [prevslideNumber, setPrevSlideNumber] = useState(
        galleryImages.length - 1
    );
    const [nextslideNumber, setNextSlideNumber] = useState(1);
    const [openModal, setOpenModal] = useState(false);

    // Functions for carousel
    const handleOpenModal = (index) => {
        console.log("clicked");
        setSlideNumber(index);
        setOpenModal(true);
        index === 0
            ? setPrevSlideNumber(galleryImages.length - 1)
            : setPrevSlideNumber(index - 1);
        index === galleryImages.length - 1
            ? setNextSlideNumber(0)
            : setNextSlideNumber(index + 1);
    };
    useEffect(() => {
        if (openModal) {
            document.querySelector(".block-1 img").src =
                galleryImages[prevslideNumber].img;
            document.querySelector(".block-2 img").src =
                galleryImages[slideNumber].img;
            document.querySelector(".block-3 img").src =
                galleryImages[nextslideNumber].img;
        }
    }, [
        openModal,
        galleryImages,
        prevslideNumber,
        slideNumber,
        nextslideNumber,
    ]);
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    const prevSlide = () => {
        slideNumber === 0
            ? setSlideNumber(galleryImages.length - 1)
            : setSlideNumber(slideNumber - 1);
        prevslideNumber === 0
            ? setPrevSlideNumber(galleryImages.length - 1)
            : setPrevSlideNumber(prevslideNumber - 1);
        nextslideNumber === 0
            ? setNextSlideNumber(galleryImages.length - 1)
            : setNextSlideNumber(nextslideNumber - 1);
        document.querySelector(".block-1 img").src =
            galleryImages[prevslideNumber].img;
        document.querySelector(".block-2 img").src =
            galleryImages[slideNumber].img;
        document.querySelector(".block-3 img").src =
            galleryImages[nextslideNumber].img;
    };

    const nextSlide = () => {
        slideNumber === galleryImages.length - 1
            ? setSlideNumber(0)
            : setSlideNumber(slideNumber + 1);
        prevslideNumber === galleryImages.length - 1
            ? setPrevSlideNumber(0)
            : setPrevSlideNumber(prevslideNumber + 1);
        nextslideNumber === galleryImages.length - 1
            ? setNextSlideNumber(0)
            : setNextSlideNumber(nextslideNumber + 1);
        document.querySelector(".block-1 img").src =
            galleryImages[prevslideNumber].img;
        document.querySelector(".block-2 img").src =
            galleryImages[slideNumber].img;
        document.querySelector(".block-3 img").src =
            galleryImages[nextslideNumber].img;
    };
    // Functions for animation of carousel
    const prevchange = () => {
        if (document.getElementById("one").classList.contains("block-1")) {
            document
                .getElementById("one")
                .classList.replace("block-1", "block-2");
            document
                .getElementById("two")
                .classList.replace("block-2", "block-3");
            document
                .getElementById("three")
                .classList.replace("block-3", "block-1");
        } else if (
            document.getElementById("one").classList.contains("block-2")
        ) {
            document
                .getElementById("one")
                .classList.replace("block-2", "block-3");
            document
                .getElementById("two")
                .classList.replace("block-3", "block-1");
            document
                .getElementById("three")
                .classList.replace("block-1", "block-2");
        } else {
            document
                .getElementById("one")
                .classList.replace("block-3", "block-1");
            document
                .getElementById("two")
                .classList.replace("block-1", "block-2");
            document
                .getElementById("three")
                .classList.replace("block-2", "block-3");
        }
    };
    const nextchange = () => {
        if (document.getElementById("one").classList.contains("block-1")) {
            document
                .getElementById("one")
                .classList.replace("block-1", "block-3");
            document
                .getElementById("two")
                .classList.replace("block-2", "block-1");
            document
                .getElementById("three")
                .classList.replace("block-3", "block-2");
        } else if (
            document.getElementById("one").classList.contains("block-2")
        ) {
            document
                .getElementById("one")
                .classList.replace("block-2", "block-1");
            document
                .getElementById("two")
                .classList.replace("block-3", "block-2");
            document
                .getElementById("three")
                .classList.replace("block-1", "block-3");
        } else {
            document
                .getElementById("one")
                .classList.replace("block-3", "block-2");
            document
                .getElementById("two")
                .classList.replace("block-1", "block-3");
            document
                .getElementById("three")
                .classList.replace("block-2", "block-1");
        }
    };

    return (
        <div className="flex flex-col justify-center content-center justify-items-center">
            <h1 className="flex justify-center content-center text-7xl mt-5 font-semibold text-gray-900">
                Gallery
            </h1>
            {/* Carousel */}
            {openModal && (
                <div class="fixed top-0 left-0 right-0 bottom-0 flex flex-row items-center justify-center z-50 max-w-full max-h-full bg-stone-900/[0.7]">
                    <button className="z-20" onClick={handleCloseModal}>
                        <VscClose className="fixed cursor-pointer top-2 right-2 h-10 w-10 text-white transition-all hover:text-blue-500 md:top-5 md:right-5" />
                    </button>
                    <button
                        className="z-20"
                        onClick={() => {
                            prevSlide();
                            prevchange();
                        }}
                    >
                        <VscChevronLeft className="fixed cursor-pointer top-1/2 left-2 h-10 w-10 text-white transition-all hover:text-blue-500 md:left-5" />
                    </button>
                    <button
                        className="z-20"
                        onClick={() => {
                            nextSlide();
                            nextchange();
                        }}
                    >
                        <VscChevronRight className="fixed cursor-pointer top-1/2 right-2 h-10 w-10 text-white transition-all hover:text-blue-500 md:right-5" />
                    </button>

                    <div className="w-[calc(100%-40px)] h-[calc(100%-40px)] flex items-center justify-center">
                        <div
                            id="one"
                            className="w-[60vw] h-[700px] bg-transparent absolute transition-all overflow-hidden block-1"
                        >
                            <img
                                className="object-contain w-full h-full"
                                alt=""
                            />
                        </div>
                        <div
                            id="two"
                            className="w-[60vw] h-[700px] bg-transparent absolute transition-all overflow-hidden block-2"
                        >
                            <img
                                className="object-contain w-full h-full"
                                alt=""
                            />
                        </div>
                        <div
                            id="three"
                            className="w-[60vw] h-[700px] bg-transparent absolute transition-all overflow-hidden block-3"
                        >
                            <img
                                className="object-contain w-full h-full"
                                alt=""
                            />
                        </div>
                    </div>
                </div>
            )}
            <hr className="flex justify-center content-center mx-auto my-8 rounded-lg bg-blue-500 h-1 w-64" />
            {/* Grid of images */}
            <div className="place-items-center max-w-[250px] py-5 mb-7 gap-5 text-black mx-auto grid grid-cols-1 min-[425px]:grid-cols-2 min-[425px]:max-w-[400px] sm:grid-cols-3 sm:max-w-[600px]  md:grid-cols-4 md:max-w-[740px] lg:max-w-[950px] xl:max-w-[1200px]">
                {galleryImages &&
                    galleryImages.map((slide, index) => {
                        return (
                            <div className="overflow-hidden max-h-40 rounded min-[425px]:max-h-28 sm:grid-cols-3 sm:max-h-28 lg:max-h-36 xl:max-h-44">
                                <img
                                    src={slide.img}
                                    key={index}
                                    onClick={() => handleOpenModal(index)}
                                    alt=""
                                    className="object-none object-center animate-appear rounded hover:scale-125 duration-1000"
                                />
                            </div>
                        );
                    })}
            </div>
        </div>
    );
};

export default ASMEgallery;
