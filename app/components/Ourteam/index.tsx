import Image from "next/image";


const index = () => {
    return (
        <div className='mx-auto max-w-7xl sm:py-4 lg:px-8 m-32'>
            <h2 className="text-4xl sm:text-65xl font-bold text-center">Our team belives you deserve <br /> only the best.</h2>
            <h3 className="text-2xl font-medium text-center pt-10 opacity-50">Why paying 3-5 different technicians with high cost when you can minimize your cost by choosing D5 Facility techs who has all technicians under one umbrella which makes the project a one time lesser payment and quality services</h3>
            <div className='grid grid-cols-1 my-16 rounded-xl'>
                <Image src="/images/team/teamimg.jpg" alt="office-image" height={684} width={1296} />
            </div>
        </div>
    )
}

export default index;
