import { Component, OnInit } from '@angular/core';
import { CreateProductDTO, Product, UpdateProduct } from 'src/app/models/product.model';
import { ProductsService } from 'src/app/services/products/products.service';
import { StoreService } from 'src/app/services/store/store.service';
import Swal from 'sweetalert2';
import { switchMap } from 'rxjs/operators'
import { zip } from 'rxjs'

@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {

  showProductDetail = false;
  productChosen!: Product

  limit = 10;
  offset = 0;

  constructor(
    private storeService: StoreService,
    private productsService: ProductsService
  ) {
    this.myShoppingCart = this.storeService.getMyShoppingCart();
   }

  ngOnInit(): void {

    this.offset = 0;
    this.loadMore()
  }

  loadMore() {
    this.productsService.getProductsByPage(this.limit, this.offset).subscribe(data => {
      if (data.length > 0) {
        this.products = this.products.concat(data);
        this.offset += this.limit;
      }
    });
  }

  myShoppingCart: Product[] = [];
  total = 0;

  today = new Date(2022, 9, 16);

  public products: Product[] = [];
  // [
  //   {
  //     id: 1,
  //     name: 'Automobil de juguete',
  //     price: 100,
  //     image: 'https://static3.depositphotos.com/1000865/118/i/600/depositphotos_1183767-stock-photo-toy-car.jpg'
  //   },
  //   {
  //     id: 2,
  //     name: 'Muñeca de trapo',
  //     price: 180,
  //     image: 'data:image/jpeg;base64,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'
  //   },
  //   {
  //     id: 3,
  //     name: 'Pelota de futbol',
  //     price: 120,
  //     image: 'https://media.istockphoto.com/photos/soccer-ball-isolated-3d-rendering-picture-id1257575611?k=20&m=1257575611&s=612x612&w=0&h=g530fFJspT42xFGY7HycLvpBKLXpJ2XAkKCRyY-SK80='
  //   },
  //   {
  //     id: 4,
  //     name: 'Castillo',
  //     price: 220,
  //     image: 'https://i.imgur.com/44nzvkQ.jpg'
  //   }
  // ];

  onAddToShoppingCart(product: Product) {
    console.log(product);

    this.storeService.addProduct(product);
    this.total = this.storeService.getTotal();
  }

  toggleProductDeatil() {
    this.showProductDetail = !this.showProductDetail;
  }

  statusDetail: 'loading' | 'success' | 'error' | 'init' = 'init';

  onShowDetails(id: number) {
      console.log('id: ' + id);
      this.statusDetail = 'loading';
      this.toggleProductDeatil();
      this.productsService.getProduct(id).subscribe({
        next: (data) => {
        console.log('product: ', data);

        this.productChosen = data;
        this.statusDetail = 'success';
        },
        error: (error) => {
          console.error(error);
          this.statusDetail = 'error';
          Swal.fire({
            title: error,
            text: error,
            icon: 'error',
            confirmButtonText: 'Ok'
          });
        }
      });
  }

  createNewProduct() {
    const product: CreateProductDTO = {
      categoryId: 1,
      description: 'prueba elvis',
      images: [''],
      price: 1,
      title: 'prueba elvis'
    };

    this.productsService.create(product).subscribe(data => {
      console.log('created',data);
      this.products.unshift(data);
    });
  }

  updateProduct() {
    const changes: UpdateProduct = {
      title: 'nuevo title'
    };
    const id = this.productChosen.id;
    this.productsService.update(id, changes).subscribe(
      data => {
        console.log('updated', data);
        const productIndex = this.products.findIndex(item => item.id == id);
        this.products[productIndex] = data;
      }
    );
  }

  deleteProduct() {
    const id = this.productChosen.id;
    this.productsService.delete(id).subscribe(data => {
      if (data) {
        const productIndex = this.products.findIndex(item => item.id == id);
        this.products.splice(productIndex, 1);
        this.showProductDetail = false;
      }
    });
  }

  readAndUpdate(id: number) {
    // callback hell
    this.productsService.getProduct(id).subscribe({
      next: (data) => {
        this.productsService.update(id, {title: 'change'}).subscribe({
          next: (response) => {
            console.log(response);
          }
        });
      }
    });

    //buena practica
    this.productsService.getProduct(id)
    .pipe(
      switchMap((product) => {
        return this.productsService.update(product.id, {title: 'change'});
      })
    ).subscribe({
      next: (data) => {

      }
    });

    // mandar peticiones en paralelo al mismo tiempo
    zip(
      this.productsService.getProduct(id),
      this.productsService.update(id, {title: 'change'})
    ).subscribe({
      next: (data) => {
        const read = data[0];
        const update = data[1];
      }
    })
  }
}
