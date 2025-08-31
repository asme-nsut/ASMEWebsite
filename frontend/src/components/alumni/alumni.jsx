import React from 'react';
import AlumniCard from './AlumniCard'; // Import our new reusable card
import './alumni.css'; // Your existing CSS
import { batchdata2024, batchdata2023 } from './data/alumniData'; // Import data

export default function Alumni() {
    return (
        <div className='scroll-smooth'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 py-10 mx-auto">
                    <div id="alumni-gallery" className="container px-5 py-4 mx-auto">
                        <div>
                            <h1 className="text-7xl mt-5 font-semibold text-gray-900">Our Alumni</h1>
                            <hr className="my-4 rounded-lg bg-blue-500 h-1 w-64" />
                        </div>

                        {/* Section for Batch of 2023 */}
                        <div className="flex flex-col text-center w-full mb-12 mt-20">
                            <h1 className="text-3xl title-font mb-2 text-gray-900 font-poppins font-black">Batch of 2023</h1>
                        </div>
                        <div className="flex flex-wrap justify-center lg:m-4 sm:m-1">
                            {batchdata2023.map((alumnus, index) => (
                                <AlumniCard key={index} details={alumnus} />
                            ))}
                        </div>

                        <div className="flex flex-col text-center w-full mb-12 mt-20">
                            <h1 className="text-3xl title-font mb-2 text-gray-900 font-poppins font-black">Batch of 2024</h1>
                        </div>
                        <div className="flex flex-wrap justify-center lg:m-4 sm:m-1">
                            {batchdata2024.map((alumnus, index) => (
                                <AlumniCard key={index} details={alumnus} />
                            ))}
                        </div>

                    </div>
                </div>
            </section>
        </div>
    );
}

