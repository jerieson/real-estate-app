// User
export const Roles = {
  ADMIN: "ADMIN",
  USER: "USER",
} as const;

export type Role = (typeof Roles)[keyof typeof Roles];

export function isValidRole(role: string): role is Role {
  return Object.values(Roles).includes(role as Role);
}

export interface Feature {
  id: string;
  feature: string;
  propertyId: string;
}

export interface Image {
  id: string;
  url: string;
  alt: string;
  propertyId: string;
}

export interface Property {
  id: string;
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  features: Feature[];
  images: Image[];
  userId: string;
  // user?: User;
  createdAt: Date;
  updatedAt: Date;
}

export interface PropertyFormData {
  title: string;
  description: string;
  price: number;
  location: string;
  bedrooms: number;
  bathrooms: number;
  area: number;
  features: string[];
  images: {
    url: string;
    alt: string;
  }[];
}
