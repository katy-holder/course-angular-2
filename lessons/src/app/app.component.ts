import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  modeView = 'd-flex';
  isActive = false;
  show = true;
  date = new Date();
  salary = 1000;
  text = 'hi world!';
  products = [{
    name: 'product 1',
    price: 20
  }, {
    name: 'product 1',
    price: 200
  }, {
    name: 'product 1',
    price: 500
  }]

  ngOnInit() {
    setTimeout(() => {
      this.modeView = 'd-flex flex-column';
    }, 1000);
  }
  toggleBlock() {
this.show = !this.show;
  }
}
