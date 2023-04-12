import { Injectable } from '@angular/core';
import { HttpClient, HttpParams } from '@angular/common/http'
import { CreateProductDTO, Product, UpdateProduct } from 'src/app/models/product.model';
import { retry } from 'rxjs/operators'

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  // si se agrega un proxy se puede modificar el origen para pasar el CORS, esto solo funciona para desarrollo
  //private apiURL = 'https://young-sands-07814.herokuapp.com/api/products';
  private apiURL = '/api/products';

  constructor(
    private httpClient: HttpClient
  ) { }

  // retry es para que se repitan las peticiones en caso de que den error, en este caso despues de fallar una vez se puede volver a reintentar 3 veces mas
  getAllProducts(limit?: number, offset?: number) {

    let params = new HttpParams();
    if (limit && offset) {
      params = params.set('limit', limit);
      params = params.set('offset', offset);
    }

    return this.httpClient.get<Product[]>(this.apiURL, { params }).pipe(retry(3));
  }

  getProduct(id: number) {
    return this.httpClient.get<Product>(`${this.apiURL}/${id}`);
  }

  getProductsByPage(limit: number, offset: number) {
    return this.httpClient.get<Product[]>(`${this.apiURL}`, {
      params: {
        limit,
        offset
      }
    });
  }

  create(data: CreateProductDTO) {
    return this.httpClient.post<Product>(this.apiURL, data);
  }

  update(id: number, dto: UpdateProduct) {
    return this.httpClient.put<Product>(`${this.apiURL}/${id}`, dto);
  }

  delete(id: number) {
    return this.httpClient.delete<Boolean>(`${this.apiURL}/${id}`)
  }

}
