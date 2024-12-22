import React from 'react'
import Title from "../common/Title";
import SubTitle from '../common/SubTitle';
import FeatureCard from '../common/FeatureCard';
import { featureData, featurecontactData, featureDetailed, featureSecure } from '@/utils/data' // Assuming your featureData is stored here
import ContactCard from '../common/ContactCard';
import Image from 'next/image';
interface Feature {
    id: number;
    title: string;
    icon: string; // This can be a string if you want, change accordingly
    color: string;
    backgroundCheck: string;
    colorheck: string;
    imageSrc: string; // Ensure this property exists
    imageAlt: string;
    content: { id: number; text: string; }[];
}

interface ContactData {
    subTitle: string;
    href?: string;
    title: string;
    image: string;
}

interface CardInfo {
    subTitle: string;
    href?: string;
    title: string;
    image: string;
}

interface SecureFeature {
    id: number;
    title: string;
    icon: string;
    color: string;
    backgroundCheck: string;
    colorheck: string;
    imageSrc: string; // Ensure this property exists
    imageAlt: string;
    content: { id: number; text: string; }[];
    cardInfo: { id: number; text: string; }[];
    style?: React.CSSProperties;

}

interface WhyChooseProps {
    features: Feature[];
    contactData: ContactData[];
    cardInfo: CardInfo[];
    detailedFeatures: Feature[];
    secureFeatures: SecureFeature[];
}

const WhyChoose: React.FC<WhyChooseProps> = () => {


    return (
        <section className='mt-200 why-choose'>
            <div className="container">
                <SubTitle subTitle="Features" />

                <Title
                    title='Why <span class="inline-block text-gradient">choose</span> us'
                    className="text-center block "
                    description="We are the only service that provides all 3 services as a packaged service"
                />
                <div className="flex flex-col  gap-5 md:gap-7 lg:gap-8 2xl:gap-10">


                    <div className="feature-card ">
                        <div className="flex flex-wrap gap-y-5 lg:gap-1  xl:gap-2 2xl:gap-4 justify-between items-center">
                            <div className="w-full lg:w-[49%] lgw-[55%]">
                                <FeatureCard features={featureData} />
                            </div>
                            <div className="w-full lg:w-[50%] 2xl:w-[40%]">
                                <div className="feature-img">
                                    {featureData.length > 0 && (
                                        <Image
                                            src={featureData[0].imageSrc}
                                            alt={featureData[0].imageAlt}
                                            width={484}
                                            height={355}
                                            className='mx-auto'
                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="feature-card ">
                        <div className="flex flex-wrap gap-y-5 lg:gap-1 xl:gap-2 2xl:gap-4 justify-between items-center">
                            <div className="w-full lg:w-[49%] lgw-[55%]">
                                <FeatureCard features={featureDetailed} />
                            </div>
                            <div className="w-full lg:w-[50%] 2xl:w-[40%]">
                                <div className='grid xs-flex-col grid-cols-2 gap-1 sm:gap-2 md:gap-3 xl:gap-x-4  2xl:gap-x-5'>
                                    {featurecontactData.map((data, index) => (
                                        <ContactCard className=' lg:p-5' widthHeight="2xl:w-[52px]  2xl:h-[52px]"
                                            key={index}
                                            subTitle={data.subTitle}
                                            href={data.href}
                                            title={data.title}
                                            image={data.image}
                                        />
                                    ))}
                                </div>

                            </div>
                        </div>
                    </div>
                    <div className="feature-card ">
                        <div className="flex flex-wrap gap-y-5 lg:gap-1 xl:gap-2 2xl:gap-4 justify-between items-center">
                            <div className="w-full lg:w-[49%] lgw-[55%]">
                                <FeatureCard features={featureSecure} />
                            </div>
                            <div className="w-full lg:w-[50%] 2xl:w-[40%] relative">
                                <div className="flex lg:flex-col h-full   mb-5 lg:mb-0  lg:absolute -bottom-2 justify-end gap-4 lg:gap-11 w-full  lg:w-fit left-0 lg:right-8 xl:right-3  2xl:right-9 mx-auto">
                                    {featureSecure.map((data, index) => (
                                        data.cardInfo.map((card, cardIndex) => (
                                            <ContactCard
                                                className={`w-full ${cardIndex} ${index} ${cardIndex === 0 ? 'relative lg:right-20 2xl:right-32' : ''}`} // Add class conditionally
                                                key={`${index}-${cardIndex}`} // Use a unique key combining index and cardIndex
                                                subTitle={card.subTitle}
                                                href={card.href} // Now correctly accessing href from cardInfo
                                                title={card.title}
                                                image={card.image}


                                            />
                                        ))
                                    ))}
                                </div>
                                <div className="feature-img text-center">

                                    {/* Access the first object in the featureSecure array */}
                                    {featureSecure.length > 0 && (
                                        <Image
                                            src={featureSecure[0].imageSrc} // Accessing the first object in the array
                                            alt={featureSecure[0].imageAlt}
                                            width={357}
                                            height={357}
                                            className='mx-auto lg:mr-0  lg:ml-auto lg:max-w-[70%] xl:max-w-full'

                                        />
                                    )}
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </section>
    )
}


export default WhyChoose



