import productsJson from '../../../products.json'

export type Product = {
  id: string;
  name: string;
  price: number;
  quantity: number;
}

export async function getProducts() {
  return new Promise<Product[]>((resolve) => setTimeout(() => resolve(productsJson), 1000));
}