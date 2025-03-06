export enum CATALOG_CATEGORY {
  KIDS = 'kids',
  CREATURES = 'creatures',
  OUTFIT = 'outfit',
  ELECTRONICS = 'electronics',
  HOME = 'home',
  GARDEN = 'garden',
}
export interface CatalogProps {
  page: CATALOG_CATEGORY;
}
