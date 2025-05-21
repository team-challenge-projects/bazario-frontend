import { ArrowLineImage } from '@/public/ArrowLineImage';
import { HeartImage } from '@/public/Heart';

import { IPost } from '@/lib/api/api';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

export const GoodHorizontalCard = ({ item }: { item: IPost }) => {
  return (
    <Card className="flex flex-row gap-4 border-none bg-transparent shadow-none">
      <CardHeader className="mb-2 h-[88px] w-[88px] shrink-0 overflow-clip rounded-[20px] bg-[url('https://picsum.photos/seed/picsum/300/200')] bg-cover bg-center bg-no-repeat"></CardHeader>
      <CardContent className="flex flex-col justify-between px-0 pb-2">
        <h3 className="text-lg font-semibold text-custom-black">
          {`${item.title} (${item.id}) `}
        </h3>
        <p className="h-[56px] overflow-clip text-lg font-medium text-custom-dark-grey">
          {item.body}
        </p>
      </CardContent>
      <CardFooter className="flex flex-row justify-between gap-5 p-0 text-custom-dark-grey">
        <HeartImage />
        <ArrowLineImage />
        <div className="flex flex-col">
          <p className="text-2xl font-semibold">70 &#8372;</p>
          <p className="text-sm font-medium">12.02.2023</p>
        </div>
      </CardFooter>
    </Card>
  );
};
