import AlumniCard from './AlumniCard'; // Import our new reusable card
import './alumni.css'; // Your existing CSS
import { batchdata2024, batchdata2023 } from './data/alumniData'; // Import data

export default function Alumni() {
    return (
        <div className='scroll-smooth'>
            <section className="text-gray-600 body-font">
                <div className="container px-5 mx-auto">

                    <div className="text-center ">
                        <div className="text-center my-10 flex flex-col space-y-4">
                            <h1 className="text-7xl font-semibold text-gray-900">Our Alumni</h1>
                            <div className="flex justify-center">
                                <div className="w-60 h-1 rounded-full bg-indigo-500 inline-flex"></div>
                            </div>
                        </div>

                        <div className="flex flex-col text-center w-full mb-12 mt-20">
                            <h1 className="text-3xl title-font mb-2 text-gray-900 uppercase font-poppins">Batch of 2024</h1>
                        </div>
                        <div className="flex flex-wrap justify-center lg:m-4 sm:m-1">
                            {batchdata2024.map((alumnus, index) => (
                                <AlumniCard key={index} details={alumnus} />
                            ))}
                        </div>

                        {/* Section for Batch of 2023 */}
                        <div className="flex flex-col text-center w-full mb-12">
                            <h1 className="text-3xl title-font mb-2 text-gray-900 uppercase font-poppins">Batch of 2023</h1>
                        </div>
                        <div className="flex flex-wrap justify-center lg:m-4 sm:m-1">
                            {batchdata2023.map((alumnus, index) => (
                                <AlumniCard key={index} details={alumnus} />
                            ))}
                        </div>


                    </div>
                </div>
            </section >
        </div >
    );
}

