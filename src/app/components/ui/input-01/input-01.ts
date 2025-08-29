import { Component, EventEmitter, Input, Output } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-01',
  imports: [FormsModule],
  templateUrl: './input-01.html',
  styleUrl: './input-01.css'
})
export class Input01 {
  @Input() id: string = '';
  @Input() type: string = 'text';
  @Input() title: string = '';
  @Input() placeholder: string = '';

  @Input() value: string = '';
  @Output() valueChange = new EventEmitter<string>();
}
