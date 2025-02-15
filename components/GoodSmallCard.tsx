import { cn } from '@/lib/utils';

import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from '@/components/ui/card';

const GoodSmallCard = () => {
  return (
    <Card className="rounded-[20px] border-none bg-transparent shadow-none">
      <CardHeader className="mb-2 h-52 w-full rounded-[20px] bg-[url('https://picsum.photos/seed/picsum/300/200')] bg-cover bg-center bg-no-repeat"></CardHeader>
      <CardContent className="flex justify-between px-0 pb-2 text-[18px]/[27px] font-semibold">
        <p>Назва товару</p>
        <p>70 &#8372;</p>
      </CardContent>
      <CardFooter className="flex justify-between px-0 text-[14px]/[110%] font-medium text-custom-dark-grey">
        <p>12 грудня 2023</p>
        <p>⭐ 7/10 </p>
      </CardFooter>
    </Card>
  );
};

export default GoodSmallCard;
