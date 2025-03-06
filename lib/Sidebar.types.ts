export interface SidebarItem {
  id: string;
  label: string;
}

export interface SidebarItems {
  [key: string]: SidebarItem[];
}
