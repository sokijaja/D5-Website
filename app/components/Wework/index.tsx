import React from "react";
import Image from "next/image";

interface DataType {
    profession: string;
    name: string;
    imgSrc: string;
}

const postData: DataType[] = [
  {
    profession: 'Team Lead',
    name: 'Joseph Michael',
    imgSrc: '/images/wework/avatar4.png',
  },
  {
    profession: 'Technical Adviser',
    name: 'Karaniu Hamzza',
    imgSrc: '/images/wework/avatar2.png',
  },
  {
    profession: 'Social Media Manager',
    name: 'Bajulaiye Muhammed Adewale',
    imgSrc: '/images/wework/avatar1.png',
  },
  {
    profession: 'Project Manager',
    name: 'Yusuf Toheeb .O.',
    imgSrc: '/images/wework/avatar3.png',
  },
  {
    profession: 'Global Team Lead',
    name: 'Bajela Olamilekan Michael',
    imgSrc: '/images/wework/avatar5.png',
  },
];

const TeamMemberCard: React.FC<DataType> = ({ name, profession, imgSrc }) => (
  <div className='bg-white p-6 rounded-xl shadow-lg transition-transform hover:scale-105'>
    <div className='relative mb-4'>
      <Image src={imgSrc} alt={name} width={182} height={182} className="rounded-full mx-auto" />
      <Image src='/images/wework/linkedin.svg' alt="LinkedIn" width={40} height={40} className="absolute bottom-0 right-0" />
    </div>
    <h4 className='text-2xl font-bold mb-2'>{name}</h4>
    <h3 className='text-lg text-gray-600'>{profession}</h3>
  </div>
);

const TeamSection: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className='container mx-auto px-4'>
        <div className="text-center mb-12">
          <h2 className="text-4xl sm:text-5xl font-bold text-gray-900 mb-4">Our Team is More Than Capable</h2>
          <h3 className="text-3xl sm:text-4xl font-bold text-gray-600">Covering Many Years of Experience</h3>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-5 gap-8">
          {postData.map((member, index) => (
            <TeamMemberCard key={index} {...member} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default TeamSection;