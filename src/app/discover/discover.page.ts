import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { NewsService } from '../news.service';

@Component({
  selector: 'app-discover',
  templateUrl: './discover.page.html',
  styleUrls: ['./discover.page.scss'],
})
export class DiscoverPage implements OnInit {

  constructor(private newsService: NewsService, private router: Router) { }

  ngOnInit() {
    
  }
  onBusinessClick(){
    console.log("business");
    this.router.navigate(['/category']);
  }
  

}
