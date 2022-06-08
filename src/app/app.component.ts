import { Component } from '@angular/core';

import { Product } from './product.model';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {

  widthImg= 10;
  title = 'ecommerce';
  name = 'Elvis';
  age = 18;
  //img = 'https://source.unsplash.com/random';
  img = 'https://cdn.pixabay.com/photo/2020/06/01/22/23/eye-5248678__340.jpg';
  btnDisabled = true;
  person = {
    name: 'Anthony',
    age: 28,
    avatar: 'https://www.w3schools.com/howto/img_avatar.png'
  }

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop)
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }
  names = ["Elvis", "Kevin", "Anthony", "Madeline"];
  newName: string = "";
  addName() {
    this.names.push(this.newName);
    this.newName = "";
  }

  delete(i: number) {
    this.names.splice(i, 1);
  }

  products: Product[] = [
    {
      name: 'EL mejor juguete',
      price: 565,
      image: 'https://source.unsplash.com/random',
      category: "all"
    },
    {
      name: 'Bicicleta casi nueva',
      price: 356,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Colleción de albumnes',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Mis libros',
      price: 23,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Casa para perro',
      price: 34,
      image: 'https://source.unsplash.com/random'
    },
    {
      name: 'Gafas',
      price: 3434,
      image: 'https://source.unsplash.com/random'
    }
  ]

  box = {
    width: 100,
    height: 100,
    background: 'red'
  };

  register = {
    name: '',
    email: '',
    password: ''
  }

  onRegister() {
    console.log(this.register)
  }
}
