import React from 'react';
import { FaAnglesDown } from 'react-icons/fa6';
import { MdOutlineCheck } from 'react-icons/md';
// import Image from 'next/image';
// Define the types for the feature data
interface Feature {
    id: number;  // This can be a string if you want, change accordingly
    title: string;
    content: { id: number; text: string }[];
    color: string;
    backgroundCheck: string;
    colorheck: string;
    // icon: 'FaAnglesDown' | 'MdOutlineCheck';
    icon: React.ReactNode; // Change to accept React components
    imageSrc: string;
    imageAlt: string;
}
interface FeatureCardProps {
    features: Feature[];  // The prop should expect an array of Feature objects
}
const FeatureCard: React.FC<FeatureCardProps> = ({ features }) => {
    return (
        <>
            {features.map((feature) => (
                <div key={feature.id}>
                    <div className="flex gap-3 sm:gap-3 xl:gap-4 2xl:gap-5">
                        <div className="relative">
                            <div className="feature-icon">
                                <div
                                    className={`w-6 h-6 sm:w-7 sm:h-7 md:w-8 xl:h-8 2xl:w-10 2xl:h-10 rounded-full flex items-center justify-center`}
                                    style={{
                                        background: `${feature.color}`,
                                    }}
                                >
                                    {feature.icon === 'FaAnglesDown' ? (
                                        <FaAnglesDown className="text-white" />
                                    ) : (
                                        <MdOutlineCheck className="text-white" size={20} />
                                    )}
                                </div>
                            </div>
                            <div
                                className={`vertical-line w-[2.4px] block absolute inset-0 mx-auto -z-[1]`}
                                style={{
                                    background: `linear-gradient(180deg, ${feature.color} 13.51%, rgba(108, 85, 255, 0.0) 89.18%, rgba(99, 101, 255, 0.0) 89.18%)`,
                                }}
                            ></div>
                            <div
                                className={`vertical-blur w-[3px] block absolute inset-0 mx-auto -z-[2]`}
                                style={{
                                    background: `linear-gradient(180deg, ${feature.color} 13.51%, ${feature.color}, ${feature.color})`,
                                    boxShadow: `0px 4px 10px 0px rgba(0, 0, 0, 0.25) inset`,
                                    filter: `blur(2px)`,
                                }}
                            ></div>
                        </div>
                        <div className="feature-content flex flex-col gap-4 lg:gap-6 xl:gap-8 2xl:gap-10">
                            <h3 className=" text-lg md:text-xl lg:text-2xl xl:text-3xl 2xl:text-[32px]">
                                {feature.title}
                            </h3>
                            <ul className="flex flex-col gap-2 lg:gap-3 xl:gap-4 2xl:gap-6">
                                {feature.content.map((item) => (
                                    <li key={item.id} className="flex gap-2 lg:gap-4">
                                        <div
                                            className={`check-icon w-5 xl:w-6 2xl:w-7 h-5 xl:h-6 2xl:h-7 aspect-square rounded-full flex items-center justify-center`}
                                            style={{
                                                background: `${feature.backgroundCheck}`,
                                                opacity: '100%',
                                            }}
                                        >
                                            <MdOutlineCheck style={{ color: `${feature.colorheck}` }} />
                                        </div>
                                        <p className="text-sm sm:text-base md:text-base xl:text-lg 2xl:text-xl">
                                            {item.text}
                                        </p>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                    {/* Right side image */}
                    {/* <div className="w-full lg:w-[40%]">
                            <div className="feature-img">
                                <Image
                                    src={feature.imageSrc}
                                    alt={feature.imageAlt}
                                    width={484}
                                    height={355}
                                />
                            </div>
                        </div> */}
                </div>
            ))}
        </>
    );
}
export default FeatureCard;
