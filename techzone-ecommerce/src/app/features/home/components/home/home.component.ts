import { Component, ElementRef, Renderer2, ViewChild } from '@angular/core';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss'],
})
export class HomeComponent {
  @ViewChild('laptop') laptopElement: ElementRef | any;
  @ViewChild('range') rangeElement: ElementRef | any;
  @ViewChild('screen') screenElement: ElementRef | any;
  @ViewChild('body') bodyElement: ElementRef | any;

  cords: number = 1;

  constructor(private readonly renderer: Renderer2) {}

  ngAfterViewInit() {
    this.rangeElement.nativeElement.addEventListener('change', () => {
      const rangeValue = this.rangeElement.nativeElement.value;
      this.renderer.setStyle(
        this.screenElement.nativeElement,
        'transform',
        `rotateX(${rangeValue}deg)`
      );
    });

    this.bodyElement.nativeElement.addEventListener(
      'mousemove',
      (event: MouseEvent) => {
        const x = event.pageX;
        const y = event.pageY;
        this.renderer.setStyle(
          this.laptopElement.nativeElement,
          'transform',
          `rotateY(${x}deg) rotateX(${y}deg)`
        );
      }
    );

    this.bodyElement.nativeElement.addEventListener('mousedown', () => {
      if (this.cords === 1) {
        this.renderer.addClass(
          this.screenElement.nativeElement,
          'screenLaptop'
        );
        this.cords = 0;
      } else {
        this.renderer.removeClass(
          this.screenElement.nativeElement,
          'screenLaptop'
        );
        this.cords = 1;
      }
    });

    this.bodyElement.nativeElement.addEventListener(
      'touchmove',
      (event: TouchEvent) => {
        const x = event.touches[0].pageX;
        const y = event.touches[0].pageY;
        this.renderer.setStyle(
          this.laptopElement.nativeElement,
          'transform',
          `rotateY(${x}deg) rotateX(${y}deg)`
        );
      }
    );
  }
}
