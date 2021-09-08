import { Component, Input, OnInit, Output,EventEmitter } from '@angular/core';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {
  
  @Input() data:any;
  @Input() showCount = false;
  @Output() calcCount = new EventEmitter<Number>();
  constructor() { }

  ngOnInit(): void {
    this.calcCount.emit(this.data.length);
  }
  
  
}
