import { Component } from '@angular/core';
import { DaughterComponent } from "./daughter/daughter.component";

@Component({
  selector: 'app-father',
  standalone: true,
  imports: [DaughterComponent],
  templateUrl: './father.component.html',
  styleUrl: './father.component.css'
})
export class FatherComponent {
  fatherMessage: string = 'Message from father component';
}
