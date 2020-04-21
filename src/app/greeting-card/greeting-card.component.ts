import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-greeting-card',
  templateUrl: './greeting-card.component.html',
  styleUrls: ['./greeting-card.component.css']
})
export class GreetingCardComponent implements OnInit {

  categories: any[] = ['sony', 'samsung', 'lg', 'mi'];
  imageName: string;

  constructor() { }

  ngOnInit(): void {
  }

  selectChangeHandler($event) {

    let name = $event.target.value.toLowerCase();
    this.imageName = $event.target.value.toLowerCase();

  }

}
