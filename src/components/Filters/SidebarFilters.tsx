import React from 'react';
import { ChevronDown } from 'lucide-react';

import { cn } from '@/lib/utils';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from '@/components/ui/accordion';
import { Button } from '@/components/ui/button';
import { Checkbox } from '@/components/ui/checkbox';
import { Label } from '@/components/ui/label';

interface FilterSectionProps {
  title: string;
  children: React.ReactNode;
  onClear?: () => void;
}

const FilterSection: React.FC<FilterSectionProps> = ({ title, children, onClear }) => (
  <AccordionItem value={title}>
    <AccordionTrigger className="py-4 text-base hover:no-underline">
      <div className="flex w-full items-center justify-between pr-2">
        <span>{title}</span>
        {onClear && (
          <span
            className="text-xs font-normal text-primary hover:text-primary/80"
            onClick={(e) => {
              e.stopPropagation(); // prevent accordion from toggling
              onClear();
            }}
          >
            Clear
          </span>
        )}
      </div>
    </AccordionTrigger>
    <AccordionContent className="pb-4">
      {children}
    </AccordionContent>
  </AccordionItem>
);

const SidebarFilters: React.FC = () => {
  const [selectedDate, setSelectedDate] = React.useState<string | null>('Today');

  const dateFilters = ['Today', 'Tomorrow', 'This Weekend'] as const;

  return (
    <aside className="w-64 flex-shrink-0">
      <h2 className="text-2xl font-bold mb-4">Filters</h2>
      <div className="bg-card rounded-lg shadow-sm border border-border">
        <Accordion type="multiple" defaultValue={['Date']} className="w-full px-4">
          <FilterSection title="Date" onClear={() => setSelectedDate(null)}>
            <div className="space-y-3">
              <div className="flex flex-wrap gap-2">
                {dateFilters.map((filter) => (
                  <Button
                    key={filter}
                    variant="outline"
                    size="sm"
                    onClick={() => setSelectedDate(filter)}
                    className={cn(
                      'rounded-md',
                      selectedDate === filter
                        ? 'border-primary text-primary bg-primary/10'
                        : 'border-border'
                    )}
                  >
                    {filter}
                  </Button>
                ))}
              </div>
              <div className="flex items-center space-x-2 pt-2">
                <Checkbox id="date-range" />
                <Label htmlFor="date-range" className="font-normal">Date Range</Label>
              </div>
            </div>
          </FilterSection>

          <FilterSection title="Categories" onClear={() => console.log('Clear Categories')}>
            <p className="text-sm text-muted-foreground">Category filters will be here.</p>
          </FilterSection>

          <FilterSection title="More Filters" onClear={() => console.log('Clear More Filters')}>
            <p className="text-sm text-muted-foreground">More filter options will be here.</p>
          </FilterSection>

          <FilterSection title="Price" onClear={() => console.log('Clear Price')}>
            <p className="text-sm text-muted-foreground">Price range slider will be here.</p>
          </FilterSection>
        </Accordion>
      </div>
      <Button variant="outline" className="w-full mt-4 border-primary text-primary hover:bg-primary/5 hover:text-primary">
        Browse by Venues
      </Button>
    </aside>
  );
};

export default SidebarFilters;
