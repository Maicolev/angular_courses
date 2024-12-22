import { CommonModule } from '@angular/common';
import { Component } from '@angular/core';

@Component({
  selector: 'app-pipes-example',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './pipes-example.component.html',
  styleUrl: './pipes-example.component.css'
})
export class PipesExampleComponent {
  employes = [
    { name: 'John', born: new Date('1995-12-17'), salary: 10000 },
    { name: 'Mary', born: new Date('1996-12-17'), salary: 12000 },
    { name: 'Mike', born: new Date('1997-12-17'), salary: 13000 },
    { name: 'Adam', born: new Date('1998-12-17'), salary: 14000 },
    { name: 'Juli', born: new Date('1999-12-17'), salary: 15000 },
  ];
}
