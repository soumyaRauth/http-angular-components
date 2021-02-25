import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-simple-http',
  templateUrl: './simple-http.component.html',
  styleUrls: ['./simple-http.component.css']
})
export class SimpleHttpComponent implements OnInit {
  data:Object;
  loading:boolean; 
  
  constructor(private http:HttpClient) { }

  makeRequest=():void=>{
    this.loading=true;
    this.http.get('https://jsonplaceholder.typicode.com/posts/1').subscribe(data=>{
      console.log(data);
      this.data=data;
      this.loading=false;
      
    })
  }

  ngOnInit(): void {
  }

}
