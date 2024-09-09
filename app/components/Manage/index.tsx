"use client"
import { useState } from 'react';
import { Switch } from '@headlessui/react';
import Image from 'next/image';


const names = [
    {
        heading: "Startup",
        price: 41,
        user: 'per user, per month',
        button: "Start My 15-day Trial",
        profiles: '5 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "400+ Templated",
        view: "Calendar View",
        support: '24/7 Support',
        category: 'yearly'
    },
    {
        heading: "Business",
        price: 29,
        user: 'per user, per month',
        button: "Start My 15-day Trial",
        profiles: '10 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "600+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'yearly'
    },
    {
        heading: "Agency",
        price: 139,
        user: 'per user, per month',
        button: "Start My 15-day Trial",
        profiles: '100 Social Profiles',
        posts: '100 Scheduled Posts Per Profile',
        templates: "800+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'yearly'
    },
    {
        heading: "Agency",
        price: 139,
        user: 'per user, per yearly',
        button: "Start My 15-day Trial",
        profiles: '100 Social Profiles',
        posts: '100 Scheduled Posts Per Profile',
        templates: "800+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'monthly'
    },
    {
        heading: "Startup",
        price: 41,
        user: 'per user, per yearly',
        button: "Start My 15-day Trial",
        profiles: '5 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "400+ Templated",
        view: "Calendar View",
        support: '24/7 Support',
        category: 'monthly'
    },
    {
        heading: "Business",
        price: 29,
        user: 'per user, per yearly',
        button: "Start My 15-day Trial",
        profiles: '10 Social Profiles',
        posts: '5 Scheduled Posts Per Profile',
        templates: "600+ Templated",
        view: "Calendar View",
        support: '24/7 VIP Support',
        category: 'monthly'
    },


]

const Manage = () => {
    
    const [enabled, setEnabled] = useState(false);
    const [selectedCategory, setSelectedCategory] = useState('monthly');

    const toggleEnabled = () => {
        setEnabled(!enabled);
        setSelectedCategory(enabled ? 'monthly' : 'yearly');
    }

    const filteredData = names.filter(items => items.category === selectedCategory);

    return (
        <div id="services-section">
            <div className='mx-20 max-w-7xl sm:py-20 lg:px-8 my-16'>
                <h3 className='text-center text-4xl sm:text-65xl font-black'>D5 Facility<br />Services & Technicians</h3>
                <div className='md:flex md:justify-around mt-10'>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>General home cleaners</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>General home and office renovations</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Interior Designer</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Inverter & Solar Panel Installatiions</h4>
                    </div>
                </div>
                <div className='md:flex md:justify-around mt-10'>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Project Managers</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Electricians</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Bricklayers</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Welders</h4>
                    </div>
                </div>
                <div className='md:flex md:justify-around mt-10'>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Painters</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Plumbers</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Tilers</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Carpenters</h4>
                    </div>
                </div>
                <div className='md:flex md:justify-around mt-10'>   
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Furniture</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Signage Technicians</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>AC Technicians</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>POP Technicians</h4>
                    </div>
                </div>
                <div className='md:flex md:justify-around mt-10'>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Glass Technicians</h4>
                    </div>
                    <div className='flex gap-5 justify-left md:justify-start'>
                        <Image src="/images/manage/right.svg" alt="right-icon" width={21} height={14} />
                        <h4 className='text-lg font-semibold'>Aluminium Technicians</h4>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Manage;
