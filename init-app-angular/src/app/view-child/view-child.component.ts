import { Component, ElementRef, ViewChild } from '@angular/core';
import { ChildComponent } from "./child/child.component";

@Component({
  selector: 'app-view-child',
  standalone: true,
  imports: [ChildComponent],
  templateUrl: './view-child.component.html',
  styleUrl: './view-child.component.css'
})
export class ViewChildComponent {
  @ViewChild('inputElement') inputElement!: ElementRef;
  @ViewChild(ChildComponent) childComponent!: ChildComponent;

  changeText() {
    this.inputElement.nativeElement.value = 'Changed text';
  }

  changeTextChild() {
    this.childComponent.changeMessage('Changed text to child component');
  }
}
