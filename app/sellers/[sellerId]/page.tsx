import { fetchPosts } from '@/lib/api/api';

import { GoodHorizontalCard } from '@/components/GoodHorizontalCard';
import { PaginationWithLinks } from '@/components/PaginationWithLinks';

interface SellerCardProps {
  searchParams: Promise<{ [key: string]: string } | undefined>;
}
const SellerCard = async ({ searchParams }: SellerCardProps) => {
  const result = await searchParams;
  const currentPage = parseInt(result?.page || '1');
  const pageSize = parseInt(result?.pageSize || '5');
  const { posts, totalPosts } = await fetchPosts(currentPage, pageSize);

  return (
    <>
      <h1 className="mb-4 text-xl font-semibold text-custom-black">
        Всі товари продавця
      </h1>
      <div className="mb-5 flex flex-col gap-4">
        {posts.map((item) => (
          <GoodHorizontalCard key={item.id} item={item} />
        ))}
        <PaginationWithLinks
          page={currentPage}
          pageSize={pageSize}
          totalCount={totalPosts}
        />
      </div>
    </>
  );
};

export default SellerCard;
