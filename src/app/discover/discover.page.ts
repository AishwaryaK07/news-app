import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NavController } from '@ionic/angular';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {
 
  send: string;
  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {}

  //Navigates to category page
  onCategoryClick(categoryType: string){
    console.log("From discover " + categoryType);
    this.newsService.setCategory(categoryType);
    console.log("After setting value" + this.newsService.getCategory());
    this.router.navigateByUrl('/tabs/discover/category');
  }

}
