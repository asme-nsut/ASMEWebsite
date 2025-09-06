function competitionDiv({ competition }) {
    return (
        <>
            <div class="lg:w-[45%] m-3 shadow-[4px_6px_16px_3px_#00000024] rounded-[25px]" data-aos="flip-right" data-aos-easing="ease-out-cubic" data-aos-duration="1000">
                <div class="flex flex-col items-center space-y-4 sm:space-y-0 sm:flex-row p-6 sm:space-x-7">
                    <img width={120} alt={competition.logo} src={competition.logo} />
                    <div class="flex-grow flex-col space-y-3">
                        <h1 class="title-font text-2xl text-gray-900 font-poppins font-bold">{competition.name}</h1>
                        { /* <h2 class="tracking-widest md:text-sm title-font font-medium text-indigo-500 mb-2 font-poppins">{competition.brief}</h2> */}
                        <p class="leading-relaxed md:text-lg font-poppins font-medium">{competition.desc}</p>
                    </div>
                </div>
            </div>
        </>
    )
}

export default competitionDiv;
