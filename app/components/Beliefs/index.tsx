
const Beliefs = () => {
    return (
        <div className='mx-auto max-w-2xl lg:max-w-7xl sm:py-4 lg:px-8 rounded-3xl'>
            <div className='grid grid-cols-1 lg:grid-cols-2 my-16 mx-5 gap-5'>

                {/* COLUMN-1 */}

                <div className="bg-darkblue bg-beliefs pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">MISSION</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-white leading-snug mb-5 text-center sm:text-start">Affordable<span className="text-grey"><br />Technical Services.</span></h3>
                    <h5 className="text-offwhite pt-2 mb-5 text-center sm:text-start">At D5 Facility Techs, our mission is to serve you with our quality, unique, and innovative technical skills. Making available an affordable and uncompromising technical services for every Homeowners, residents, firms, organisations, and Nigerian abroad while we build trust and confidence through standards and time management.</h5>
                    <div className="text-center sm:text-start">
                    </div>
                </div>

                {/* COLUMN-2 */}

                <div className="bg-build pt-12 px-10 sm:px-24 pb-52 md:pb-70 rounded-3xl">
                    <h2 className="text-lg font-normal text-white tracking-widest mb-5 text-center sm:text-start">VISION</h2>
                    <h3 className="text-4xl sm:text-65xl font-bold text-black leading-snug mb-5 text-center sm:text-start"><span className="text-white">Build</span> your Ideas</h3>
                    <h5 className="bluish pt-2 mb-5 text-center sm:text-start">We envision to be the most innovative, reliable, trustworthy, fastest, and leading facility solution provider company.</h5>
                    <div className="text-center sm:text-start">
                    </div>
                </div>

            </div>
        </div>
    )
}

export default Beliefs;
