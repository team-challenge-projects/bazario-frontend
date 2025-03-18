import { GoodHorizontalCard } from '@/components/GoodHorizontalCard';

const SellerCard = () => {
  return (
    <>
      <h1 className="mb-4 text-xl font-semibold text-custom-black">
        Всі товари продавця
      </h1>
      <div className="mb-5 flex flex-col gap-4">
        {[...Array(16).keys()].map((item) => (
          <GoodHorizontalCard key={item} />
        ))}
      </div>
    </>
  );
};

export default SellerCard;
