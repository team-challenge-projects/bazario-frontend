export interface SidebarItem {
  id: number;
  name: string;
}

export interface SidebarItems {
  [key: string]: SidebarItem[];
}
