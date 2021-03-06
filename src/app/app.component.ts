import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  posts = [
    { 
      title: 'Neat Tree',
      imageUrl: 'assets/tree.jpeg',
      username: 'nature',
      content: 'I saw this neat tree today.'
    },
    { 
      title: 'Mountain',
      imageUrl: 'assets/mountain.jpeg',
      username: 'mountainlover',
      content: 'A snowy mountain.'
    },
    { 
      title: 'Mountain Biking',
      imageUrl: 'assets/biking.jpeg',
      username: 'biker69',
      content: 'Bike till you (don\'t) like.'
    }
  ];
}
