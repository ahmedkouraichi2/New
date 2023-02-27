import { Component, OnInit } from '@angular/core';
import { NewsService } from '../services/news.service';

@Component({
  selector: 'app-new-components',
  templateUrl: './new-components.component.html',
  styleUrls: ['./new-components.component.css']
})
export class NewComponentsComponent implements OnInit {
  topDisplay:any[] = [];
   constructor( private _services :NewsService) { }

  ngOnInit(): void {
    this._services.topHeading().subscribe((result) => {
       console.log("test",result);
       this.topDisplay =  result.articles;
       console.log(this.topDisplay);
    })
  }

}
