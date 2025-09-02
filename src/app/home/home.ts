import { Component } from '@angular/core';
import { Card01 } from "../components/ui/card-01/card-01";
import { Task } from "../components/task/task";

@Component({
  selector: 'app-home',
  imports: [Card01, Task],
  templateUrl: './home.html',
  styleUrl: './home.css'
})
export class Home {
  //
}
