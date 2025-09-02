import { NgClass } from '@angular/common';
import { Component, EventEmitter, Input, Output } from '@angular/core';


@Component({
  selector: 'app-button-01',
  imports: [NgClass],
  templateUrl: './button-01.html',
  styleUrl: './button-01.css'
})
export class Button01 {
  @Input() type: 'button' | 'submit' | 'reset' = 'button';
  @Input() color: 'blue' | 'green' | 'red' = 'green';
  
  @Output() click = new EventEmitter<void>();
  

  handleClick() {
    this.click.emit();
  }
}
