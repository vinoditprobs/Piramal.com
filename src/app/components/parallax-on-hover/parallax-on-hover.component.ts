import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-parallax-on-hover',
  templateUrl: './parallax-on-hover.component.html',
  styleUrl: './parallax-on-hover.component.scss'
})
export class ParallaxOnHoverComponent {
  @Input() imageSrc: string = '';
  @Input() ratio: string = 'ratio-4x3';

  transformStyle = '';

  onMouseMove(event: MouseEvent) {
    const windowWidth = window.innerWidth;
    const windowHeight = window.innerHeight;
    const mouseX = event.clientX;
    const mouseY = event.clientY;

    const offsetX = ((windowWidth / 2) - mouseX) / 10;
    const offsetY = ((windowHeight / 2) - mouseY) / 10;

    this.transformStyle = `translate(${offsetX}px, ${offsetY}px)`;
  }

}
