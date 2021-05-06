import { Component } from '@angular/core';

@Component({    //patch to embedd in larger page----> line 11 index.html
  selector: 'my-root',
  
  // templateUrl: './app.component.html',     when app.component.html is present
  template: `<h1>My First Angular App</h1>
            {{ title }}`,
  
  // styleUrls: ['./app.component.css']     when app.component.css is present
  styles: [`h1{
          color: green;
          }`]
})
export class MyComponent {
  title = 'Welcome to Modified Angular FirstApp of angular';    //title var goes to app.componenet.html {{  }}
}
