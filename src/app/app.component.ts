import { Component } from '@angular/core';
import { faHelmetSafety } from '@fortawesome/free-solid-svg-icons';
import { Database } from './core/data/database';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'IntroProject';

  database: Database = new Database()

  constructor(){
    console.log(this.database)
  }

  // ----------------------------------- STYLES -----------------------------------

  helmetIcon = faHelmetSafety
}
