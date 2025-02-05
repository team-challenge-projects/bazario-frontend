export enum CATALOG_CATEGORY {
  KIDS = 'діти',
  CREATURES = 'тварини',
  OUTFIT = 'одяг',
  ELECTRONICS = 'eлектроніка',
  HOME = 'дім',
  GARDEN = 'сад',
}
export interface CatalogProps {
  page: CATALOG_CATEGORY;
}
