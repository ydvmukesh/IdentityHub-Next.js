import Image from 'next/image';
import Link from 'next/link';
import React from 'react'
interface CardProps {
    className?: string; // Optional className prop
    widthHeight?: string; // Optional className prop
    href?: string; // Optional href prop
    subTitle: string;
    title: string;
    image?: string; // Optional image prop
    style?: React.CSSProperties;
}
const ContactCard: React.FC<CardProps> = ({ href, subTitle, title, image, className = '', widthHeight = '' }) => {
    return (
        <>
            <div className={`contact-card ${className}`}>
                {image && (
                    <div className={`contact-card-icon flex items-center justify-center ${widthHeight}`}>
                        <Image src={image} alt={`${subTitle} icon`} width={28} height={28} className="w-5 h-5 sm:w-7 sm:h-7 object-contain" />
                    </div>
                )}
                <div className='leading-[normal]'>
                    <p className='text-[10px] sm:text-sm'>{subTitle}</p>
                    {href ? (
                        <Link href={href} className='text-xs sm:text-base text-slate-300'>{title}</Link>
                    ) : (
                        <p className='text-xs sm:text-base text-slate-300'>{title}</p>
                    )}
                </div>
            </div>
        </>
    )
}
export default ContactCard
