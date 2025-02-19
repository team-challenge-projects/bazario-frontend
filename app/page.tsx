import Categories from '@/components/Categories';
import Popular from '@/components/Popular';

export default function Home() {
  return (
    <div className="flex-col">
      <Categories />
      <Popular />
    </div>
  );
}
