import React from 'react';
import SubTitle from '../common/SubTitle';
import Button from '../common/Button';
import Image from 'next/image';
import BannerImg from '/public/images/productivity.png';
import ContactCard from '../common/ContactCard';

const Banner = () => {
    return (
        <section className='banner  pb-100  pt-11 md:pt-14 lg:pt-14 xl:pt-20 2xl:pt-[100px]'>
            <div className="container ">
                <div className="lg:max-w-[992px] xl:mt-[85px] 2xl:mt-[78px] mx-auto lg:px-[67px]">
                    <SubTitle subTitle="Secure your data" />
                    <div className="flex flex-col gap-3 md:gap-5 lg:gap-7">

                        <div className="section-head  mx-auto">
                            <h1 className='section-title  section-title-gredient text-2xl md:text-4xl lg:text-5xl 2xl:text-6xl font-semibold'>
                                <span className='block'>Identity-hub is a better way </span> to achieve<span className='line-large'> privacy</span>
                            </h1>
                        </div>

                        <p className='text-lg lg:text-xl 2xl:text-2xl max-w-[807px] mx-auto text-center'>
                            Make your data invisible by generating unlimited identities. The next-level in privacy protection for online and travel.
                        </p>
                        <div className="flex gap-2 md:gap-4 items-center justify-center">
                            <Button className='btn-primary px-4' title='Start free trial' />
                            <Button className='btn-secondary' title='Use it Now' />
                        </div>
                    </div>
                    <div className="flex flex-col lg:flex-row  justify-center flex-wrap  mt-6 sm:mt-8 lg:mt-24 2xl:mt-16  gap-1 md:gap-0	 ">
                        <div className='flex s-flex-col lg:flex-col justify-between gap-1 sm:gap-3 order-2 sm:order-1 items-end lg:items-auto'>
                            <ContactCard subTitle='One-time passcode' title='Kas3345-r32' image='/images/passcode.svg' />
                            <ContactCard subTitle='Credit card' title='123 456 789 1243' image='images/credit-card.svg' />
                        </div>
                        <div className="flex-1 order-1 sm:order-1">
                            <Image src={BannerImg} alt='bannerimg' width={486} height={437} className='mx-auto' />

                        </div>
                        <div className='flex  s-flex-col lg:flex-col justify-between gap-1 sm:gap-3 order-3 sm:order-0'>
                            <ContactCard subTitle='Phone numbers' href='tel:+1456453-3456' title='+1 (456) 453-3456' image='images/phone.svg' />
                            <ContactCard subTitle='Email address' href='mailto:davidjx@gmail.com' title='davidjx@gmail.com' image='images/mail-open.svg' />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Banner;



