import React from 'react';
import Button from './Button';
import { IoCaretForwardOutline } from 'react-icons/io5';
import Image from 'next/image';
interface CardIconProps {
  title?: string;
  description?: string;
  icon?: string;
  buttonTitle?: string;
  buttonHref?: string;
  buttonIcon?: React.ReactNode;  // This can accept any JSX element (icon or component)
}
const CardIcon: React.FC<CardIconProps> = ({
  title = 'Card Title',
  description = 'Card Description',
  icon = '',          // Default icon URL if none provided
  buttonTitle = 'Start free trial',
  buttonHref = '/',
  buttonIcon = <IoCaretForwardOutline size={20} />,  // Default icon (IoCaretForwardOutline)
}) => {
  return (
    <div className="card-box">
      <div className="card-shape p-5 md:p-7 lg:p-8 flex flex-col  gap-4 md:gap-5 lg:gap-7 h-full">
        <div className="card-icon flex items-center justify-center p-2 md:p-[10px] w-[42px] h-[42px] lg:w-[52px] lg:h-[52px] rounded-xl">
          {icon && <Image src={icon} alt="card icon" width={52} height={52} />}
        </div>
        <div className="flex flex-col gap-2 h-full">
          <h3 className="card-title text-xl  md:text-2xl lg:text-[28px] lg:max-w-[85%]">{title}</h3>
          <p className="text-base md:text-lg lg:text-xl">{description}</p>
        </div>
        <Button
          href={buttonHref}  // Button's href (URL)
          className="p-0"
          title={buttonTitle} // Button's title
          icon={buttonIcon}   // Button's icon
        />
      </div>
    </div>
  );
}
export default CardIcon;
