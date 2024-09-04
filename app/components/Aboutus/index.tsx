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
        heading: "Planning",
        imgSrc: "/images/aboutus/imgOne.svg",
        bgSrc: "/images/aboutus/plan.jpg",
        paragraph: 'We meticulously plan every aspect of your project, ensuring a seamless process from concept to completion, aligned with your goals and timelines.',
        link: 'Learn more'
    },
    {
        heading: "Construction",
        imgSrc: "/images/aboutus/imgTwo.svg",
        bgSrc: "/images/aboutus/construction-5.jpg",
        paragraph: 'Our expert team brings your vision to life with precision and quality, ensuring durable, high-standard constructions that stand the test of time.',
        link: 'Learn more'
    },
    {
        heading: "Management",
        imgSrc: "/images/aboutus/imgThree.svg",
        bgSrc: "/images/aboutus/construction-2.png",
        paragraph: 'We provide comprehensive property management services that maintain and enhance the value of your assets, ensuring smooth operations and satisfied occupants.',
        link: 'Learn more'
    },
]

const Aboutus = () => {
    return (

        <div id="aboutus-section">
            <div className='mx-auto max-w-7xl px-4 py-24 lg:px-10 bg-lightgreyrelative'>
                <Image src="/images/aboutus/dots.svg" width={100} height={100} alt="dots-image" className="absolute bottom-1 -left-20" />
                <h3 className='text-center text-blue text-lg tracking-widest'>WHAT WE DO</h3>
                <h4 className='text-center text-4xl lg:text-65xl font-bold'>Leading the Future of Real Estate</h4>
                <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 my-16 gap-x-8 lg:gap-x-32'>
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
                             className='pt-10 pl-8 pb-10 pr-6 rounded-xl'
                             style={{
                                 width: "100%",
                                 height: "100%",
                                 backgroundColor: "rgba(51, 58, 117, 0.6)",
                            }}>
                            <h4 className='text-4xl font-semibold  text-white mb-5'>{item.heading}</h4>
                            <Image src={item.imgSrc} alt={item.imgSrc} width={100} height={100} className="mb-5" />
                            <h4 className='text-lg font-normal text-white mb-5'>{item.paragraph}</h4>
                            <Link href="#" className='text-lg font-semibold text-white hover-underline'>
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