export interface FurnitureProduct {
  id: string;
  name: string;
  description: string;
  price: number;
  discount: number;
  category: string;
  imageUrl: string;
  inStock: boolean;
  features: string[];
  dimensions: {
    width: number;
    height: number;
    depth: number;
    unit: string;
  };
  materials: string[];
  colors: string[];
  // Ensure all properties match the expected type
}
