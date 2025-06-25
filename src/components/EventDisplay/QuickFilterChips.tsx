import React from 'react';
import { cn } from '@/lib/utils';
import { Button } from '@/components/ui/button';
import { ScrollArea, ScrollBar } from '@/components/ui/scroll-area';

const quickFilters = [
  'Amusement Parks',
  'Tourist Attractions',
  'Gaming',
  'Adventure',
  'Nightlife',
  'Food and Drinks',
  'Parties',
  'Unique Tours',
] as const;

type QuickFilterType = typeof quickFilters[number];

const QuickFilterChips: React.FC = () => {
  const [activeFilter, setActiveFilter] = React.useState<QuickFilterType | null>('Amusement Parks');

  return (
    <div className="w-full">
      <h2 className="text-2xl font-bold mb-4">Activities In Chennai</h2>
      <ScrollArea className="w-full whitespace-nowrap">
        <div className="flex w-max space-x-2 pb-4">
          {quickFilters.map((filter) => (
            <Button
              key={filter}
              variant="outline"
              className={cn(
                'rounded-full',
                activeFilter === filter
                  ? 'border-primary text-primary bg-primary/10'
                  : 'border-border text-primary hover:bg-primary/5'
              )}
              onClick={() => setActiveFilter(filter)}
            >
              {filter}
            </Button>
          ))}
        </div>
        <ScrollBar orientation="horizontal" />
      </ScrollArea>
    </div>
  );
};

export default QuickFilterChips;
