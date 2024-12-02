'use client';

import { useEffect, useState, useCallback } from 'react';
import Image from 'next/image';
import { Button } from '@/components/ui/button';
import { ArrowRight } from 'lucide-react';
import { cn } from '@/lib/utils';

const SCROLL_THRESHOLD = 10;

export function HeroSection() {
  const [scrollY, setScrollY] = useState(0);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleScroll = useCallback(() => {
    const currentScroll = window.scrollY;
    setScrollY(currentScroll);
    setIsScrolled(currentScroll > SCROLL_THRESHOLD);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, [handleScroll]);

  return (
    <div className="relative min-h-[800px] w-full flex items-center overflow-hidden">
      {/* Background Images with Parallax */}
      <div className="absolute inset-0 w-full h-full">
        <Image
          src="/images/backgrounds/Sole Trader AI Hero Background-Underlay.png"
          alt="Background"
          fill
          className="object-cover"
          priority
          style={{
            transform: `translateY(${scrollY * 0.5}px)`,
          }}
        />
        <Image
          src="/images/backgrounds/Sole Trader AI Hero Background-Overlay.png"
          alt="Overlay"
          fill
          className="object-cover"
          priority
          style={{
            transform: `translateY(${scrollY * 0.2}px)`,
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/60 to-black/20" />
      </div>

      {/* Content */}
      <div className="container relative mx-auto px-4 py-32 max-w-[1400px]">
        <div className="max-w-3xl">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6 font-heading tracking-tight">
            YOUR BUSINESS,{' '}
            <span className={cn(
              "block relative",
              isScrolled ? "animate-text-gradient" : "text-transparent"
            )}>
              <span className={cn(
                "absolute inset-0",
                !isScrolled && "stroke-text"
              )}>
                {isScrolled ? "SUPERCHARGED" : "STREAMLINED"}
              </span>
              {isScrolled ? "SUPERCHARGED" : "STREAMLINED"}
            </span>
            BY AI
          </h1>
          <p className="text-xl text-gray-200 mb-8 leading-relaxed max-w-2xl">
            Meet your new AI workforce. From small businesses to enterprises, our AI
            employees integrate seamlessly with your team, delivering exceptional results
            24/7. Experience the future of work with AI team members that understand your
            business.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button
              size="lg"
              className="group text-lg h-12 px-8 bg-[#40798C] hover:bg-[#40798C]/90"
            >
              Create your AI team
              <ArrowRight className="ml-2 h-5 w-5 transform group-hover:translate-x-1 transition" />
            </Button>
            <Button
              variant="outline"
              size="lg"
              className="text-lg h-12 px-8 border-[#40798C] text-white hover:bg-[#40798C]/10"
            >
              Test an Agent
            </Button>
          </div>
          <p className="mt-4 text-sm text-gray-300">
            Join hundreds of businesses already working with AI employees
          </p>
        </div>
      </div>
    </div>
  );
}