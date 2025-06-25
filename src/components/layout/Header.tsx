import React from 'react';
import { Search, ChevronDown, Menu } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { cn } from '@/lib/utils';

const BookMyShowLogo = () => (
  <svg width="130" height="32" viewBox="0 0 130 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-label="BookMyShow">
    <path d="M12.28 2.2H1.92V29.8H12.28C19.98 29.8 24.18 24.36 24.18 16C24.18 7.64 19.98 2.2 12.28 2.2ZM18.52 16C18.52 21.44 15.98 25.12 12.16 25.12H7.58V6.88H12.16C15.98 6.88 18.52 10.56 18.52 16Z" fill="#F84464"/>
    <path d="M37.64 2.2H27.28V29.8H37.64C45.34 29.8 49.54 24.36 49.54 16C49.54 7.64 45.34 2.2 37.64 2.2ZM43.88 16C43.88 21.44 41.34 25.12 37.52 25.12H32.94V6.88H37.52C41.34 6.88 43.88 10.56 43.88 16Z" fill="#F84464"/>
    <path d="M59.9868 29.8H53.5068V19.48L51.5268 21.64V16.36L59.5068 7.24H60.4668V29.8H59.9868Z" fill="#333333"/>
    <path d="M72.9385 2.2H62.6985V29.8H78.8985V25.12H68.3585V18.1H76.7385V13.42H68.3585V6.88H78.0185V2.2H72.9385Z" fill="#333333"/>
    <path d="M89.043 2.2H81.363V29.8H87.003L87.243 19.36L89.223 21.52L93.183 29.8H99.423L92.763 18.28L99.663 7.24H93.063L89.043 13.84V2.2Z" fill="#333333"/>
    <path d="M116.489 2.2H101.009V7.24L109.889 20.32V29.8H115.649V19.96L106.529 6.88H116.489V2.2Z" fill="#333333"/>
    <path d="M129.587 16.72L123.587 7.24H122.507L118.667 13.96V2.2H112.907V29.8H118.667V19.84L124.547 29.8H125.747L129.587 23.08V29.8H130V2H129.587V16.72Z" fill="#333333"/>
  </svg>
);

const Header: React.FC = () => {
  const mainNavItems = [
    { name: 'Movies', href: '#' },
    { name: 'Stream', href: '#' },
    { name: 'Events', href: '#' },
    { name: 'Plays', href: '#' },
    { name: 'Sports', href: '#' },
    { name: 'Activities', href: '#', isActive: true },
  ] as const;

  const secondaryNavItems = [
    { name: 'ListYourShow', href: '#' },
    { name: 'Corporates', href: '#' },
    { name: 'Offers', href: '#' },
    { name: 'Gift Cards', href: '#' },
  ] as const;

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-white shadow-sm">
      <div className="max-w-screen-xl mx-auto px-4 sm:px-6">
        {/* Top Bar */}
        <div className="flex items-center justify-between h-16">
          <div className="flex items-center gap-4 md:gap-8">
            <a href="/" aria-label="BookMyShow Home">
              <BookMyShowLogo />
            </a>
            <div className="relative hidden lg:block w-full max-w-lg">
              <Search className="absolute left-3.5 top-1/2 -translate-y-1/2 h-4 w-4 text-muted-foreground" />
              <Input
                type="search"
                placeholder="Search for Movies, Events, Plays, Sports and Activities"
                className="pl-10 h-10 w-full bg-gray-100 border-transparent rounded-md focus:bg-white focus:ring-1 focus:ring-ring"
              />
            </div>
          </div>
          <div className="flex items-center gap-2 sm:gap-4">
            <Button variant="ghost" className="hidden sm:flex items-center gap-1 text-sm font-medium text-gray-700">
              <span>Chennai</span>
              <ChevronDown className="h-4 w-4" />
            </Button>
            <Button className="bg-primary text-primary-foreground hover:bg-primary/90 rounded-md px-5 py-1.5 text-xs font-semibold h-auto">
              Sign in
            </Button>
            <Button variant="ghost" size="icon">
              <Menu className="h-6 w-6 text-gray-700" />
            </Button>
          </div>
        </div>
        {/* Bottom Bar / Sub-navigation */}
        <div className="flex items-center justify-between h-12 bg-white text-sm text-gray-600 border-t border-gray-200">
          <nav className="flex items-center gap-3 md:gap-5">
            {mainNavItems.map((item) => (
              <a 
                href={item.href} 
                key={item.name} 
                className={cn(
                  "font-medium transition-colors hover:text-gray-900 whitespace-nowrap",
                  item.isActive ? "text-gray-900 font-semibold" : "text-gray-600"
                )}
              >
                {item.name}
              </a>
            ))}
          </nav>
          <nav className="hidden md:flex items-center gap-3 md:gap-5 text-xs">
            {secondaryNavItems.map((item) => (
               <a href={item.href} key={item.name} className="font-normal text-gray-600 hover:text-gray-900 whitespace-nowrap">
                 {item.name}
               </a>
            ))}
          </nav>
        </div>
      </div>
    </header>
  );
};

export default Header;
