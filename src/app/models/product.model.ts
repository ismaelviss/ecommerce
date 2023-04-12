export interface Product {
  id: number;
  title: string;
  price: number;
  images: string[];
  description: string;
  category: Category;
}

export interface Category {
  id: number;
  name: string;
}

//se extiende de un objeto omitiendo ciertos parametros en esta nueva interfaz, en este caso id y category
export interface CreateProductDTO extends Omit<Product, 'id' | 'category'> {
  categoryId: number
}

// se extiende de un objeto haciendo que todas sus propiedades sea opcionales, es decir, que se pueden ser nulas o con valor.
export interface UpdateProduct extends Partial<CreateProductDTO> {

}
