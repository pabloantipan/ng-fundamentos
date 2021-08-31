import { Component } from '@angular/core';
// import { threadId } from 'worker_threads';
import { Product } from './product.model';

let this_is_test_;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'my-store';
  name = 'Pablo';
  age = 18;
  myImg = 'https://www.w3schools.com/howto/img_avatar.png'
  btnDisabled = true;

  person = {
    name: 'Pablo',
    age: 18,
    avatar: this.myImg
  }

  names: string[] = ['Nicolas', 'Julio', 'Pablo'];
  newName: string = "";

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }

  increaseAge() {
    this.person.age++;
  }

  onScroll(event: Event) {
    const element = event.target as HTMLElement;
    console.log(element.scrollTop);
  }

  changeName(event: Event) {
    const element = event.target as HTMLInputElement;
    this.person.name = element.value;
  }

  addName() {
    this.names.push(this.newName);
  }

  deleteName(index: number) {
    this.names.splice(index, 1)
  }
}
