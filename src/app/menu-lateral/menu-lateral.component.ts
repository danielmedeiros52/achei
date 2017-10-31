import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-menu-lateral',
  templateUrl: './menu-lateral.component.html',
  styleUrls: ['./menu-lateral.component.css']
})
export class MenuLateralComponent implements OnInit {



private _achei:any
  constructor(private router:Router) {}
    
    setAchei(achei){
 if(achei){

  this.router.navigate(['achei'])

}else{
  this.router.navigate(['perdi'])

}




   }

  ngOnInit() {
  }

}
