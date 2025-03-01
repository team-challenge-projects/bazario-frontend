import Categories from '@/components/Categories';
import GoodsList from '@/components/GoodsList';

export default function Home() {
  return (
    <div className="flex-col">
      <Categories />
      <h2 className="mb-7 text-[28px] font-semibold leading-[42px] text-primary">
        Популярні товари
      </h2>
      <GoodsList />
    </div>
  );
}
