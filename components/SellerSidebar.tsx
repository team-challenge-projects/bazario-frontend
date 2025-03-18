import { Button } from './ui/button';

export const SellerSidebar = () => {
  return (
    <div className="w-[413px]">
      <ul className="mb-4 flex flex-col gap-2">
        <li className="flex justify-start gap-4">
          <div className="text-xl font-semibold text-custom-black">
            Рейтинг:
          </div>
          <div> 9/10</div>
        </li>
        <li className="flex justify-start gap-4">
          <div className="text-xl font-semibold text-custom-black">
            Відгуки:
          </div>
          <div> 9/10</div>
        </li>
        <li className="flex justify-start gap-4">
          <div className="text-lg font-semibold text-custom-black">Ім'я:</div>
          <div> 9/10</div>
        </li>
        <li className="flex justify-start gap-4">
          <div className="text-xl font-semibold text-custom-black">
            Місцезнаходження:
          </div>
          <div className="text-lg font-medium text-custom-black">
            с.Велика Круча, Полтавська обл.
          </div>
        </li>
        <li className="flex justify-start gap-4">
          <div className="text-xl font-semibold text-custom-black">
            Відстань до Вас:
          </div>
          <div className="text-lg font-medium text-custom-black">200 км</div>
        </li>
      </ul>
      <Button className="rounded-[20px] bg-custom-black px-10 py-[34px] text-xl font-semibold text-custom-mint shadow-[0px_2px_3px_0px_rgba(0,0,0,0.3),0px_6px_10px_4px_rgba(0,0,0,0.15)] before:w-full">
        Переглянути контакти продавця
      </Button>
    </div>
  );
};
