'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { Store, PlusCircle, User, LogIn } from 'lucide-react';

export function Navigation() {
  const pathname = usePathname();
  
  const routes = [
    {
      href: '/',
      label: 'Marketplace',
      icon: Store,
      active: pathname === '/',
    },
    {
      href: '/create',
      label: 'Create',
      icon: PlusCircle,
      active: pathname === '/create',
    },
    {
      href: '/profile',
      label: 'Profile',
      icon: User,
      active: pathname === '/profile',
    },
  ];

  return (
    <nav className="border-b">
      <div className="container mx-auto px-4">
        <div className="flex h-16 items-center justify-between">
          <div className="flex items-center space-x-4">
            <Link href="/" className="flex items-center space-x-2">
              <Store className="h-6 w-6" />
              <span className="font-bold">Sole Trader AI</span>
            </Link>
            <div className="hidden md:flex md:space-x-1">
              {routes.map((route) => (
                <Button
                  key={route.href}
                  variant={route.active ? 'default' : 'ghost'}
                  className={cn(
                    'flex items-center space-x-2',
                    route.active && 'bg-primary text-primary-foreground'
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
            <Button variant="ghost" size="sm" asChild>
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