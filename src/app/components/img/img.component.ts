import { Component, Input, OnInit, Output, EventEmitter, OnChanges, AfterViewInit, OnDestroy, SimpleChange } from '@angular/core';

@Component({
  selector: 'app-img',
  templateUrl: './img.component.html',
  styleUrls: ['./img.component.scss']
})
export class ImgComponent implements OnInit {

  constructor() {
    // when create the instance
    console.log('constructor');
  }

  ngOnChanges(changes: SimpleChange) {
     // before render
    // change inputs -- many times
    console.log('ngOnChanges', 'imgValue => ', this.img);
    console.log('changes', changes);
  }

  ngOnInit(): void {
    // before render
    // async - fetch -- once time
    console.log('ngOnInit', 'imgValue => ', this.img);
  }

  ngAfterViewInit() {
    // after render
    // handler childre
    console.log('ngAfterViewInit');
  }

  ngOnDestroy() {
    // when delete
    console.log('ngOnDestroy');
  }

  @Input() img: String = "inicial";
  alt: String = "inicial";

  // eslint-disable-next-line @angular-eslint/no-input-rename
  @Input('alt')
  set changeAlt(newAlt: string) {
    this.alt = newAlt;
  }

  @Output() loaded = new EventEmitter();
  imageDefault = './assets/images/default.jpeg';

  imgError() {
    this.img = this.imageDefault;
  }

  imgLoad() {
    console.log("imagen cargada");
    this.loaded.emit("el componente img informa que se cargo la imagen");
  }
}
