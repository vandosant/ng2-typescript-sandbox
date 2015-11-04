import {Component, View, bootstrap} from 'angular2/angular2';
import {Todo} from './todo.ts';

@Component({
  selector: 'app',
})
@View({
  directives: [Todo],
  template: `<h1><todo></todo></h1>`
})

class App {}

bootstrap(App);
