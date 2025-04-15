import { Component, Input } from '@angular/core';
import { button } from './button.variants';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
})
export class ButtonComponent {
  @Input() intent: 'primary' | 'secondary' = 'primary';
  @Input() size: 'sm' | 'md' | 'lg' = 'md';

  get buttonClasses(): string {
    return button({ intent: this.intent, size: this.size });
  }
}
