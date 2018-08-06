import { Component,OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit  {
  title = 'ng-components';
  file:File = null
  ngOnInit(){
  }

  fileChange(event){
    this.file=event.file;
  }
  
}
