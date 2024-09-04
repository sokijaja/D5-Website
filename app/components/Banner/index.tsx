import Image from "next/image";
import bgImage from "/images/banner/interior-4.jpg";

const Banner = () => {
    return (
        <div id="hero-section" style={{
            backgroundImage: `url(${"/images/banner/interior-4.jpg"}), linear-gradient(rgba(0,0,0,0.5),rgba(0,0,0,0.5))`,
            backgroundSize: "cover",
            backgroundPosition: "center center",
            backgroundRepeat: "no-repeat",
            minHeight: "80vh",
         }}><div style={{
            width: "100%",
            height: "100%",
            backgroundColor: "rgba(33, 19, 13, 0.3)",
            minHeight: "80vh",
         }}>
        <div className='mx-auto max-w-7xl sm:py-10 px-6 lg:px-8'>
            <div className='grid grid-cols-1'>

                {/* COLUMN-1 */}
                <div className="mt-20 mx-auto sm:mx-0">
                    <div className='py-2 text-center'>
                        <button className='text-blue bg-lightblue hover:shadow-xl text-xs md:text-md font-bold px-6 py-1 rounded-3xl tracking-wider hover:text-white hover:bg-blue'>Africa&apos;s #1 Property Firm </button>
                    </div>
                    <div className="py-3 text-center">
                        <h1 className='text-6xl lg:text-80xl font-bold text-white mb-10'>
                        Let&apos;s Bring<br />Your Next Project to Life. 
                        </h1>
                        <p className="text-2xl text-white">
                           We Design | We Construct | We Manage.
                        </p>
                    </div>
                </div>

            </div>
        </div>
        </div></div>
    )
}

export default Banner;
