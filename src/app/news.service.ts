import { Injectable } from '@angular/core';
import { environment } from "../environments/environment";
import { HttpClient } from "@angular/common/http";
import { HTTP } from '@ionic-native/http';

const API_URL = environment.apiUrl;
const API_KEY = environment.apiKey;

@Injectable({
  providedIn: 'root'
})
export class NewsService {
 
  public categoryTypes: string = '';
  constructor(private http: HTTP) { 
    this.http.setSSLCertMode("nocheck");
  }
 
  getData(url){
    return (this.http.get(`${API_URL}/${url}&apiKey=${API_KEY}`, {}, {})
      .then(data => {
        console.log(data.data); // data received by server
      })
      .catch(error => {
        console.log(error.error); // error message as string
      })
    );
  }

  setCategory(categoryTypes){
    this.categoryTypes = categoryTypes;
  }

  getCategory(){
    return this.categoryTypes;
  }
}
