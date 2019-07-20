import { Component } from '@angular/core';

/**
 * Generated class for the MyComponent1Component component.
 *
 * See https://angular.io/api/core/Component for more info on Angular
 * Components.
 */
@Component({
  selector: 'my-component1',
  templateUrl: 'my-component1.html'
})
export class MyComponent1Component {

  text: string;

  constructor() {
    console.log('Hello MyComponent1Component Component');
    this.text = 'Hello World';
  }

}
