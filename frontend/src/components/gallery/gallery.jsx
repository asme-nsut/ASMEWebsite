import { useState, useMemo } from "react";
import { VscClose, VscChevronLeft, VscChevronRight } from "react-icons/vsc";

const ASMEgallery = () => {
    // Group images by year (unordered object, we'll sort when rendering)
    const galleryImagesByYear = useMemo(
        () => ({
            2025: [
                { img: "/GalleryImages/2025/2025_gallery_1.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_2.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_3.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_4.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_5.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_6.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_7.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_8.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_9.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_10.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_11.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_12.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_13.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_14.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_15.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_16.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_17.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_18.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_19.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_20.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_21.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_22.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_23.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_24.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_25.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_26.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_27.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_28.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_29.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_30.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_31.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_32.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_33.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_34.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_35.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_36.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_37.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_38.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_39.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_40.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_41.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_42.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_43.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_44.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_45.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_46.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_47.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_48.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_49.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_50.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_51.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_52.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_53.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_54.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_55.jpg" },
                { img: "/GalleryImages/2025/2025_gallery_56.jpg" },


            ],
            2024: [
                { img: "/GalleryImages/2024/2024_gallery_1.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_2.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_3.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_4.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_5.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_6.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_7.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_8.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_9.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_10.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_11.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_12.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_13.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_14.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_15.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_16.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_17.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_18.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_19.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_20.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_21.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_22.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_23.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_24.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_25.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_26.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_27.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_28.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_29.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_30.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_31.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_32.jpg" },
                { img: "/GalleryImages/2024/2024_gallery_33.jpg" },


            ],
            2023: [
                { img: "/GalleryImages/2023/2023_gallery_1.jpg" },
                { img: "/GalleryImages/2023/2023_gallery_2.jpg" },
                { img: "/GalleryImages/2023/2023_gallery_3.jpg" },
                { img: "/GalleryImages/2023/2023_gallery_4.jpg" },
                { img: "/GalleryImages/2023/2023_gallery_5.jpg" },
                { img: "/GalleryImages/2023/2023_gallery_6.jpg" },
                { img: "/GalleryImages/2023/2023_gallery_7.jpg" },
                { img: "/GalleryImages/2023/2023_gallery_8.jpg" },




            ],
            2022: [
                { img: "/GalleryImages/2022/2022_gallery_1.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_2.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_3.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_4.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_5.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_6.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_7.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_8.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_9.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_10.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_11.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_12.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_13.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_14.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_15.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_16.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_17.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_18.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_19.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_20.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_21.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_22.jpg" },
                { img: "/GalleryImages/2022/2022_gallery_23.jpg" },

            ],
        }),
        []
    );

    // Sort years descending, then flatten for easy modal navigation
    const sortedEntries = useMemo(
        () =>
            Object.entries(galleryImagesByYear).sort(
                (a, b) => Number(b[0]) - Number(a[0])
            ),
        [galleryImagesByYear]
    );

    const galleryImages = useMemo(
        () => sortedEntries.flatMap(([_, imgs]) => imgs),
        [sortedEntries]
    );

    const [slideNumber, setSlideNumber] = useState(0);
    const [openModal, setOpenModal] = useState(false);

    // Open modal with selected image index
    const handleOpenModal = (index) => {
        setSlideNumber(index);
        setOpenModal(true);
    };

    // Close modal
    const handleCloseModal = () => {
        setOpenModal(false);
    };

    // Previous slide index (wrap-around)
    const prevSlide = () => {
        setSlideNumber((prev) =>
            prev === 0 ? galleryImages.length - 1 : prev - 1
        );
    };

    // Next slide index (wrap-around)
    const nextSlide = () => {
        setSlideNumber((prev) =>
            prev === galleryImages.length - 1 ? 0 : prev + 1
        );
    };

    return (
        <div className="flex flex-col justify-center items-center">
            <div className="text-center my-10 flex flex-col space-y-4">
                <h1 className="text-7xl font-semibold text-gray-900">Gallery</h1>
                <div className="flex justify-center">
                    <div className="w-60 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                </div>
            </div>

            {/* Modal */}
            {openModal && (
                <div className="fixed inset-0 flex items-center justify-center z-50 bg-stone-900/70">
                    <button
                        onClick={handleCloseModal}
                        className="absolute top-5 right-5 text-white text-4xl hover:text-blue-500 z-50"
                        aria-label="Close modal"
                    >
                        <VscClose />
                    </button>
                    <button
                        onClick={prevSlide}
                        className="absolute left-5 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-blue-500 z-50"
                        aria-label="Previous"
                    >
                        <VscChevronLeft />
                    </button>
                    <button
                        onClick={nextSlide}
                        className="absolute right-5 top-1/2 transform -translate-y-1/2 text-white text-4xl hover:text-blue-500 z-50"
                        aria-label="Next"
                    >
                        <VscChevronRight />
                    </button>
                    <div className="max-w-[90vw] max-h-[90vh] flex items-center justify-center">
                        <img
                            src={galleryImages[slideNumber].img}
                            alt={`Gallery ${slideNumber + 1}`}
                            className="max-w-full max-h-full rounded"
                            loading="lazy"
                        />
                    </div>
                </div>
            )}


            {/* Images grouped by year in descending order */}
            {sortedEntries.map(([year, images], yearIndex) => {
                const prevCount = sortedEntries
                    .slice(0, yearIndex)
                    .reduce((acc, [_, imgs]) => acc + imgs.length, 0);

                return (
                    <div key={year} className="w-full max-w-[1200px] px-4 mb-10">
                        <h2 className="text-3xl font-semibold mb-5">{year}</h2>
                        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-5">
                            {images.map((slide, index) => {
                                const flatIndex = prevCount + index;
                                return (
                                    <div
                                        key={flatIndex}
                                        className="overflow-hidden rounded cursor-pointer max-h-44"
                                        onClick={() => handleOpenModal(flatIndex)}
                                        role="button"
                                        tabIndex={0}
                                        onKeyDown={(e) => {
                                            if (e.key === "Enter") handleOpenModal(flatIndex);
                                        }}
                                    >
                                        <img
                                            src={slide.img}
                                            alt={`${year}`}
                                            className="object-cover w-full h-full rounded hover:scale-110 transition-transform duration-500"
                                        />
                                    </div>
                                );
                            })}
                        </div>
                    </div>
                );
            })}
        </div>
    );
};

export default ASMEgallery;
