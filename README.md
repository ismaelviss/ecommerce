# isntall cli angular
npm i @angular/cli
# Ecommerce

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.5.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

## crea proyeto
`ng new ecommerce` ##crea un nuevo proyecto de angular

## StringInterpolation enviamos el valor de typeScript a datos que pueda interpretar el html
{{ sample }} 
## propertie binding enlaza una variable de typeScript vs una propiedad de algun elemnto, esto lo hace en un sola via para leer informacion
[disabled]="btnDisable" 

## eventos en angular
<button (click)="onSave()">Save</button>
<div class="box" (scroll)="onScroll($event)">

## data binding enlaza variables de typeScript con elementos de html de manera directa y en dos vias
<input type="text" required #nameInput="ngModel" [(ngModel)]="person.name" />

## ngIf estructura de control en angular
<p *ngIf="person.name === 'elvis' && person.age>=18; else myBlock">soy elvis mayor de Edad</p>
<ng-template #myBlock>
  <p>Es menor de edad y quizas no se llama elvis</p>
</ng-template>

## ngFor recorre un arrelgo de cualquier tipo
```
<ul>
  <li *ngIf="names.length === 0">No hay elementos</li>
  <li *ngFor="let name of names; index as i">
    {{i}} - {{name}}
    <button (click)="delete(i)">Delete</button>
  </li>
</ul>

```

## componentes
ejemplo
`ng g c "name"`
### componentes sin test y sin estilos
`ng g c componentes/img --skip-tests -is`

### para crear pipes de transformacion
`ng g p pipes/reverse`

### para crear directivas
`ng g d directives/highlight`

### para crear servicios
`ng g s services/products/products`

## creacion de proxy para salta CORS en Dev
hay que crear el archivo proxy.config.json
se debe cambiar la URL de los services y colocar solo la URI
ahora se debe ejecutar el proyecto con el siguiente comando ng serve --proxy-config ./proxy.config.json
y se lo puede resumir agregando el comando en package.json
npm rum start:proxy
### ambientes
si ya tienes un proxy para saltar CORS y haz modificado el API_URL, ahora necesitas que de acuerdo al ambiente se coloque una URL diferente, para esto debemos definir una carpeta environments y crear los archivo para cada ambiente
luedo de eso podemos mandar a correr con el siguiente comando.
`ng build --prod`
