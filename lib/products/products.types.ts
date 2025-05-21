export interface ProductCardProps {
  title: string;
  price: number;
  rating: {
    score: number;
    total: number;
  };
  seller: {
    name: string;
    link: string;
  };
  location: {
    city: string;
    region: string;
    distance: number;
  };
  deliveryMethod: string;
  images: string[];
  publishDate: string;
}
