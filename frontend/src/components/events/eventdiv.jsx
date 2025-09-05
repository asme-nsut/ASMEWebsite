function eventDiv({ event }) {
    return (
        <>
            <div class="py-8 px-4 lg:w-[45%] mx-4 my-4 shadow-[4px_6px_16px_3px_#00000024] rounded-[25px]" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div class="flex flex-col items-center -mt-4">
                    <div class="flex-shrink-0 h-[400px] mb-5 rounded-[15px] object-contain overflow-hidden flex flex-col text-center leading-none">
                        <img alt={event.logo} src={event.logo} />
                    </div>
                    <div class="flex-grow pl-6">
                        <h1 class="title-font text-2xl text-gray-900 mb-1 font-poppins font-bold">{event.name}</h1>
                        <h2 class="tracking-widest md:text-sm title-font font-medium text-indigo-500 mb-2 font-poppins">{event.brief}</h2>
                        <p class="leading-relaxed mb-5 md:text-lg font-poppins font-medium">{event.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default eventDiv;
