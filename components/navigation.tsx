'use client';

import Link from 'next/link';
import Image from 'next/image';
import { useEffect, useState } from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Store, PlusCircle, User, LogIn } from 'lucide-react';

const SCROLL_THRESHOLD = 800; // Height of hero section

export function Navigation() {
  const [isOverHero, setIsOverHero] = useState(true);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;
      setIsOverHero(scrollPosition < SCROLL_THRESHOLD);
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);
  
  const routes = [
    {
      href: '/',
      label: 'Marketplace',
      icon: Store,
    },
    {
      href: '/create',
      label: 'Create',
      icon: PlusCircle,
    },
    {
      href: '/profile',
      label: 'Profile',
      icon: User
    }
  ];

  return (
    <nav className={cn(
      "fixed top-0 left-0 right-0 z-50 transition-all duration-300",
      isOverHero 
        ? "bg-transparent" 
        : "bg-white/80 backdrop-blur-md border-b shadow-sm"
    )}>
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center">
              <Image
                src="/images/logo/soletraderai-logo-black.png"
                alt="Sole Trader AI"
                width={140}
                height={40}
                className={cn(
                  "transition-opacity",
                  isOverHero ? "opacity-0" : "opacity-100"
                )}
              />
              <Image
                src="/images/logo/soletraderai-logo-white.png"
                alt="Sole Trader AI"
                width={140}
                height={40}
                className={cn(
                  "absolute transition-opacity",
                  isOverHero ? "opacity-100" : "opacity-0"
                )}
              />
            </Link>
            <div className="hidden md:flex md:space-x-1">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant="ghost"
                  className={cn(
                    'flex items-center space-x-2',
                    isOverHero 
                      ? 'text-white hover:text-white/90' 
                      : 'text-gray-900 hover:text-gray-900/90'
                  )}
                  asChild
                >
                  <Link href={route.href}>
                    <route.icon className="h-4 w-4" />
                    <span>{route.label}</span>
                  </Link>
                </Button>
              ))}
            </div>
          </div>
          <div className="flex items-center space-x-2">
            <Button 
              variant="ghost" 
              size="sm" 
              className={cn(
                isOverHero 
                  ? 'text-white hover:text-white/90' 
                  : 'text-gray-900 hover:text-gray-900/90'
              )}
              asChild
            >
              <Link href="/auth" className="flex items-center space-x-2">
                <LogIn className="h-4 w-4" />
                <span>Sign In</span>
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </nav>
  );
}