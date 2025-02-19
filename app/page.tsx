import Categories from '@/components/Categories';
import GoodsList from '@/components/GoodsList';

export default function Home() {
  return (
    <div className="flex-col">
      <Categories />
      <GoodsList />
    </div>
  );
}
