

export interface Product {
  category: string,
  description: string,
  id: number,
  image: string,
  price: number,
  rating: { rate: number, count: number },
  title: string,
}
export interface PeriodicElement {
  title: number;
  category: string;
  price: '';
  rating: number;
}
export interface Category {
  [key: string]: string[]
}
// getProducts(): Observable<Product[]> {
//   return this.http.get<Product[]>(`${environment.apiBaseUrl}/products`);
// }

