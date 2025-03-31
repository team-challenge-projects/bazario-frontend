import { fetchPosts } from '@/lib/api/api';

import { GoodHorizontalCard } from '@/components/GoodHorizontalCard';
import { PaginationWithLinks } from '@/components/PaginationWithLinks';

const SellerCard = async ({ searchParams }) => {
  const { posts, totalPosts } = await fetchPosts(1, 5);
  console.log('searchParams', searchParams);
  return (
    <>
      <h1 className="mb-4 text-xl font-semibold text-custom-black">
        Всі товари продавця
      </h1>
      <div className="mb-5 flex flex-col gap-4">
        {posts.map((item) => (
          <GoodHorizontalCard key={item.id} item={item} />
        ))}
        <PaginationWithLinks page={1} pageSize={5} totalCount={totalPosts} />
      </div>
    </>
  );
};

export default SellerCard;
