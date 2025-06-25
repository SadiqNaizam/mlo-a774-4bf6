import React from 'react';
import { cn } from '@/lib/utils';
import { Card, CardContent } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

export interface EventCardProps {
  id: string;
  imageUrl: string;
  date: string;
  title: string;
  venue: string;
  category: string;
  isPromoted: boolean;
}

const EventCard: React.FC<EventCardProps> = ({ imageUrl, date, title, venue, category, isPromoted }) => {
  return (
    <Card className="w-full overflow-hidden border-none shadow-none bg-transparent">
      <CardContent className="p-0">
        <div className="relative">
          <img
            src={imageUrl}
            alt={title}
            className="w-full h-auto object-cover rounded-lg aspect-[2/3]"
          />
          {isPromoted && (
            <Badge variant="default" className="absolute top-3 left-3 bg-primary text-primary-foreground">
              PROMOTED
            </Badge>
          )}
          <div className="absolute bottom-0 left-0 right-0 px-3 py-2 bg-gradient-to-t from-black/80 to-transparent rounded-b-lg">
             {/* The date is already baked into the provided image URLs as per the BookMyShow style */}
          </div>
        </div>
        <div className="pt-3">
          <h3 className="font-semibold text-lg text-foreground truncate">{title}</h3>
          <p className="text-sm text-muted-foreground truncate">{venue}</p>
          <p className="text-sm text-muted-foreground truncate">{category}</p>
        </div>
      </CardContent>
    </Card>
  );
};

export default EventCard;
