import { CategoriesSidebar } from '@/components/CategoriesSidebar';

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <div>
      <h1>Categories</h1>
      <div className="flex flex-row">
        <aside className="w-72">
          <CategoriesSidebar />
        </aside>
        <main>{children}</main>
      </div>
    </div>
  );
}
