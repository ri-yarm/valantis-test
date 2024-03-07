export type MFFields = "product" | "price" | "brand";

export type MProduct = {
  id: string;
  product: string;
  price: number;
  brand: string | null;
};
