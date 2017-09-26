import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-cadastro',
  templateUrl: './cadastro.component.html',
  styleUrls: ['./cadastro.component.css']
})
export class CadastroComponent implements OnInit {
  clicou2(cadastro){
    if(cadastro.value==true){
    cadastro.value=false
    
    return true 
    }
  else{
    cadastro.value=true
    return false
  } 
  }

  constructor() { }

  ngOnInit() {
  }

}
