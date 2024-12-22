import { FaTwitter , FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

export const  footerMenu = [
    { name: 'features', href: '/about' },
    { name: 'Services', href: '/services' },
    { name: 'pricing', href: '/contact' },
    { name: 'how to use', href: '/blog' },
  ];


export  const navigationItems = [
    { href: '#', label: 'Home' },
    { href: '#', label: 'Features' },
    { href: '#', label: 'Pricing' },
    { href: '#', label: 'Partners' },
    { href: '#', label: 'About us' },
];

// common.ts

export const socialLinks = [
    {
      name: "Twitter",
      url: "https://twitter.com",
      icon: FaTwitter ,  
    },
    {
      name: "Instagram",
      url: "https://instagram.com",
      icon: RiInstagramFill ,
    },
    {
      name: "Telegram",
      url: "https://t.me",
      icon: FaTelegramPlane ,  // Use the actual component for Telegram
    },
    {
      name: "Facebook",
      url: "https://facebook.com",
      icon: FaFacebookF,
    },
  ];