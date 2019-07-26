import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  products;
  constructor(private http: HttpClient){}
  
  get_products(){
    
    return this.http.get('http://localhost:8080/HelloWorld').subscribe((res)=>{
      console.log(res);
      this.products = res;
    });
  }
  ngOnInit() {
  }

}
