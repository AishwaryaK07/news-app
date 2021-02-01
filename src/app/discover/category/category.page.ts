import { Component, OnInit, Input } from '@angular/core';
import { NewsService } from 'src/app/news.service';

@Component({
  selector: 'app-category',
  templateUrl: './category.page.html',
  styleUrls: ['./category.page.scss'],
})
export class CategoryPage implements OnInit {

  data: any;
  title: string;
  constructor(private newsService: NewsService) {
   }

  ngOnInit(){
    //check for type of category & set the api url accordingly
    if(this.newsService.getCategory().match('business'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=business')
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
    else if(this.newsService.getCategory().match('entertainment'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=entertainment')
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
    else if(this.newsService.getCategory().match('health'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=health')
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
    else if(this.newsService.getCategory().match('science'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=science')
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
    else if(this.newsService.getCategory().match('sports'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=sports')
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
    else if(this.newsService.getCategory().match('technology'))
    {
     this.newsService
        .getData('top-headlines?country=in&category=technology')
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
    else {
      console.log("Default news");
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
  }

  //Opens browser to visit link
  visitLink(article){
   console.log(article.url); 
   window.open(article.url, "_blank");
  }
}

