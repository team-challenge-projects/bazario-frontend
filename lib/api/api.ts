export interface IPost {
  userId: number;
  id: number;
  title: string;
  body: string;
}
export async function fetchPosts(page: number, pageSize: number) {
  const res = await fetch(
    `https://jsonplaceholder.typicode.com/posts?_start=${(page - 1) * pageSize}&_limit=${pageSize}`,
  );
  const posts = (await res.json()) as IPost[];
  const totalPosts = parseInt(res.headers.get('x-total-count') || '0');
  res.headers.get('x-total-count');

  return { posts, totalPosts };
}
