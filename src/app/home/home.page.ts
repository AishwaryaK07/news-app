import { Component } from '@angular/core';
import { NewsService } from "../news.service";

@Component({
  selector: 'app-home',
  templateUrl: 'home.page.html',
  styleUrls: ['home.page.scss'],
})
export class HomePage {

  data: any;
  constructor(private newsService: NewsService) {}

  ngOnInit(){
    this.newsService
    .getData('top-headlines?country=in')
    .then(data => {
        console.log(data);
        this.data = data;
      })
      .catch(error => {
  
        // console.log(error.status);
         console.log(error.error); // error message as string
        // console.log(error.headers);
       });
  }

  visitLink(article){
   // window.open(data.url, '_system');
   console.log(article.url); 
   window.open(article.url, "_blank");
  }
}
