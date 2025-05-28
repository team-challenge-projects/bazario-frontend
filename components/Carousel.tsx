import * as React from 'react';

import { Card, CardContent } from '@/components/ui/card';
import {
  Carousel,
  CarouselContent,
  CarouselItem,
} from '@/components/ui/carousel';

export default function CarouselOrientation({ links }: { links: string[] }) {
  return (
    <Carousel
      opts={{
        align: 'center',
      }}
      orientation="vertical"
      className="w-full max-w-xs"
    >
      <CarouselContent className="-mt-1 h-[502px]">
        {links.map((link, index) => (
          <CarouselItem key={index} className="shrink-1 pt-1 md:basis-1/2">
            <div className="p-1">
              <Card
                className="h-[88px] w-[88px] rounded-[20px] bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${link})` }}
              >
                <CardContent className="flex items-center justify-center p-6"></CardContent>
              </Card>
            </div>
          </CarouselItem>
        ))}
      </CarouselContent>
    </Carousel>
  );
}
