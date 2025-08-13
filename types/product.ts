export interface ProductFormData {
  productName: string;
  description: string;
  price: string;
  images: File[];
  deliveryMethods: {
    selfPickup: boolean;
    newPost: boolean;
    ukrpost: boolean;
  };
  seller: {
    privateIndividual: boolean;
    business: boolean;
  };
  location: string;
  condition: {
    new: boolean;
    excellent: boolean;
    used: boolean;
  };
  category: string;
  brands: string[];
  ageRestriction: {
    from0to5: boolean;
    from1to2: boolean;
    over18: boolean;
  };
}

export interface Category {
  id: string;
  name: string;
  subcategories?: Category[];
}

export interface Location {
  id: string;
  name: string;
  region: string;
}
