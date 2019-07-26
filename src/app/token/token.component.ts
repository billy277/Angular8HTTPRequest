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
  //This is a custom built method so you can run it whenever you want (perfect when you want to put it on a button)
  //This gets the data and puts it into products object in line 10 above
  get_products(){
        return this.http.get('http://localhost:3000/products').subscribe((res)=>{
      console.log(res);
      this.products = res;
    });
  }
  //This is a built in method that runs everytime the page loads - so if we put anything in here it will auto load
  ngOnInit() {
    console.log("ngOnInit is being called")
    return this.http.get('http://localhost:3000/products').subscribe((res)=>{
      console.log(res);
      this.products = res;
  });
  }
  //This will load anytime you change the data inside of this class
  //so in this example in line 34 the changeData() function will replace the contents of products
  //then this will auto fire!
  ngOnChanges(){
    console.log("if data changes this will fire")
    
  }
  //another custom function just to change data to test ngOnChanges
  
  changeData(){
    this.products = "products is now empty"
    console.log(this.products)
  }
}
