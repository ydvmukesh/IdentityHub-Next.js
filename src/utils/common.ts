import { FaTwitter, FaFacebookF, FaTelegramPlane } from 'react-icons/fa';
import { RiInstagramFill } from "react-icons/ri";

// Define the structure for menu items
interface MenuItem {
  name: string;
  href: string;
}

// Define the structure for navigation items
interface NavigationItem {
  href: string;
  label: string;
}

// Define the structure for social links
interface SocialLink {
  name: string;
  url: string;
  icon: React.ComponentType; // Type for React components
}

// Footer menu
export const footerMenu: MenuItem[] = [
  { name: 'Features', href: '/about' },
  { name: 'Services', href: '/services' },
  { name: 'Pricing', href: '/contact' },
  { name: 'How to Use', href: '/blog' },
];

// Navigation items
export const navigationItems: NavigationItem[] = [
  { href: '#', label: 'Home' },
  { href: '#', label: 'Features' },
  { href: '#', label: 'Pricing' },
  { href: '#', label: 'Partners' },
  { href: '#', label: 'About Us' },
];

// Social links
export const socialLinks: SocialLink[] = [
  {
    name: "Twitter",
    url: "https://twitter.com",
    icon: FaTwitter,
  },
  {
    name: "Instagram",
    url: "https://instagram.com",
    icon: RiInstagramFill,
  },
  {
    name: "Telegram",
    url: "https://t.me",
    icon: FaTelegramPlane,
  },
  {
    name: "Facebook",
    url: "https://facebook.com",
    icon: FaFacebookF,
  },
];
