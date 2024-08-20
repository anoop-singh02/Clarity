"use client";

import { useRouter } from 'next/router';
import { SignedIn, SignedOut, UserButton } from '@clerk/nextjs';
import Image from 'next/image';
import Link from 'next/link';
import { Button } from '../ui/button';

// Define navLinks directly in the file
const navLinks = [
  {
    name: 'Home',
    route: '/',
    icon: '/assets/icons/home.svg',
  },
  {
    name: 'About',
    route: '/about',
    icon: '/assets/icons/about.svg',
  },
  // Add more links as needed
];

const Sidebar = () => {
  const router = useRouter();
  const pathname = router.pathname;

  return (
    <aside className="sidebar">
      <div className="flex size-full flex-col gap-4">
        <Link href="/" className="sidebar-logo">
          <Image src="/assets/images/logo-text.svg" alt="logo" width={100} height={28} />
        </Link>
      </div>
      <nav className="sidebar-nav">
        <SignedIn>
          <ul className="sidebar-nav_elements">
            {navLinks.slice(0, 6).map((link) => {
              const isActive = link.route === pathname;

              return (
                <li key={link.route} className={`sidebar-nav_element group ${isActive ? 'bg-purple-gradient text-white' : 'text-gray-700'}`}>
                  <Link className="sidebar-link" href={link.route}>
                    <Image
                      src={link.icon}
                      alt={link.name}
                      width={24}
                      height={24}
                      className={`${isActive && 'brightness-200'}`}
                    />
                    {link.name}
                  </Link>
                </li>
              );
            })}
          </ul>
        </SignedIn>
      </nav>
    </aside>
  );
};

export default Sidebar;
