import React from 'react';
import EventCard, { EventCardProps } from './EventCard';

const dummyEvents: EventCardProps[] = [
  {
    id: '1',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00310749-kxfyfdskce-portrait.jpg',
    date: 'Sun, 22 Jun onwards',
    title: 'VGP Wonder World Chennai',
    venue: 'VGP Wonder World: Chennai',
    category: 'Amusement Parks',
    isPromoted: true,
  },
  {
    id: '2',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-TW9uLCAyMyBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00398699-qdvfrttgmy-portrait.jpg',
    date: 'Mon, 23 Jun onwards',
    title: 'Ideal Beach Resort Day Outing',
    venue: 'Ideal Beach Resort: Mahabalipuram',
    category: 'Resorts',
    isPromoted: true,
  },
  {
    id: '3',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00375952-vghwrzaddd-portrait.jpg',
    date: 'Sun, 22 Jun onwards',
    title: 'Casagrand Sundance',
    venue: 'Casagrand Suncity: Chennai',
    category: 'Theme parks',
    isPromoted: false,
  },
  {
    id: '4',
    imageUrl: 'https://assets-in.bmscdn.com/discovery-catalog/events/tr:w-400,h-600,bg-CCCCCC:w-400.0,h-660.0,cm-pad_resize,bg-000000,fo-top:ote-U3VuLCAyMiBKdW4gb253YXJkcw%3D%3D,ots-29,otc-FFFFFF,oy-612,ox-24:q-80/et00311494-wxwpwjpzpx-portrait.jpg',
    date: 'Sun, 22 Jun onwards',
    title: 'VGP Marine Kingdom - Chennai',
    venue: 'VGP Marine Kingdom: Chennai',
    category: 'Aquariums',
    isPromoted: false,
  },
];

const EventCardGrid: React.FC = () => {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
      {dummyEvents.map((event) => (
        <EventCard key={event.id} {...event} />
      ))}
    </div>
  );
};

export default EventCardGrid;
