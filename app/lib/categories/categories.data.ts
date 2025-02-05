import { CATALOG_CATEGORY } from "@/app/lib/categories/categories.types";
import React from "react";
import { PiBabyCarriageLight, PiTShirtLight, PiArmchairLight, PiTreeLight, PiDeviceMobileLight, PiFishLight  } from "react-icons/pi";

interface CategoryTypes {
    id: number;
    category: CATALOG_CATEGORY;
    icon: React.ElementType;
}

export const data: CategoryTypes[] = [
    {
        id:1,
        category: CATALOG_CATEGORY.KIDS,
        icon: PiBabyCarriageLight,
    },
    {
        id:2,
        category: CATALOG_CATEGORY.CREATURES,
        icon: PiFishLight,
    },
    {
        id:3,
        category: CATALOG_CATEGORY.OUTFIT,
        icon: PiTShirtLight,
    },
    {
        id:4,
        category: CATALOG_CATEGORY.ELECTRONICS,
        icon: PiDeviceMobileLight,
    },
    {
        id:5,
        category: CATALOG_CATEGORY.HOME,
        icon: PiArmchairLight,
    },
    {
        id:6,
        category: CATALOG_CATEGORY.GARDEN,
        icon: PiTreeLight ,
    },
] as const;
