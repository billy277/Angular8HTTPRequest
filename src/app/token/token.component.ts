import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-token',
  templateUrl: './token.component.html',
  styleUrls: ['./token.component.css']
})
export class TokenComponent implements OnInit {
  products;
  constructor(private httpClient: HttpClient){}
  
  get_products(){
    
    this.httpClient.get('http://localhost:3000/products').subscribe((res)=>{
      console.log(res);
      this.products = res;
    });
  }
  ngOnInit() {
  }

}
