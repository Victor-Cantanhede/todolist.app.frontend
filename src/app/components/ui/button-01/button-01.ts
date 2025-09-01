import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-button-01',
  imports: [],
  templateUrl: './button-01.html',
  styleUrl: './button-01.css'
})
export class Button01 {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Output() click = new EventEmitter<void>();

  handleClick() {
    this.click.emit();
  }
}
