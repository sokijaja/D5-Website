import Image from "next/image";
import Link from "next/link";
import { ChevronRightIcon } from '@heroicons/react/20/solid'

interface datatype {
    heading: string;
    imgSrc: string;
    bgSrc: string;
    paragraph: string;
    link: string;
}

const Aboutdata: datatype[] = [
    {
        heading: "Homeowners/Residents",
        imgSrc: "/images/aboutus/imgOne.svg",
        bgSrc: "/images/aboutus/plan.jpg",
        paragraph: 'D5 Facility Techs helps homeowners bring their dream homes to life through expert design, construction, and management. We create personalized spaces that reflect your lifestyle and ensure lasting comfort and quality.',
        link: 'Learn more'
    },
    {
        heading: "Firms/Companies",
        imgSrc: "/images/aboutus/imgTwo.svg",
        bgSrc: "/images/aboutus/construction-5.jpg",
        paragraph: 'For businesses, D5 Facility Techs designs and builds professional spaces that inspire productivity and success. We deliver functional and innovative environments tailored to your company’s unique needs.',
        link: 'Learn more'
    },
    {
        heading: "Estates/Builders",
        imgSrc: "/images/aboutus/imgThree.svg",
        bgSrc: "/images/aboutus/construction-2.png",
        paragraph: 'D5 Facility Techs partners with estate developers and builders to execute large-scale projects efficiently. From planning to management, we ensure top-quality results that add value to your developments.',
        link: 'Learn more'
    },
    {
        heading: "Nigerians Abroad",
        imgSrc: "/images/aboutus/imgThree.svg",
        bgSrc: "/images/aboutus/naij.png",
        paragraph: 'D5 Facility Techs offers seamless property solutions for Nigerians in the diaspora, ensuring your real estate investments back home are managed with precision and care. We deliver trusted services that give you peace of mind, no matter where you are.',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-12 lg:px-10 bg-lightgreyrelative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>WHAT WE DO</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Providing Quality and Affordable Technician Services</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 my-16 gap-x-2 lg:gap-x-8'>
                    {Aboutdata.map((item, i) => (
                        <div key={i} 
                             className='bg-white mt-16 shadow-xl group rounded-xl'
                             style={{
                                backgroundImage: `url(${item.bgSrc})`,
                                backgroundSize: 'cover',
                                backgroundPosition: "center center",
                                backgroundRepeat: "no-repeat",
                             }}
                             >
                            <div 
                             className='pt-10 pl-6 pb-6 pr-6 rounded-xl'
                             style={{
                                 width: "100%",
                                 height: "100%",
                                 backgroundColor: "rgba(51, 58, 117, 0.6)",
                            }}>
                            <h4 className='text-xl font-semibold  text-white mb-5 w-[80vw]'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-md font-normal text-white mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-md font-semibold text-white hover-underline'>
                                {item.link}
                                <ChevronRightIcon width={20} height={20} />
                            </Link></div>
                        </div>
                    ))}
                </div>
            </div>
        </div>

    )
}

export default Aboutus;