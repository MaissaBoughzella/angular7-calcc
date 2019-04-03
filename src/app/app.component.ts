import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  /*
  <input type="text" #myText>
      <button (click)="btnClicked(myText.value)">click here</button>
      <h1>bonjour {{message}}</h1>
  message='';
btnClicked(myText){
  this.message=myText;
}*/
message='';
operation='';
num='';
Clicked(op){
  if (op in ['0','1','2','3','4','5','6','7','8','9']){
    this.num=this.num+op;
    this.message= this.num;
  }
  else
  {
    this.num='';
    this.message= op;  
  }
  this.operation=this.operation+op;
  
}
resultat(){
    this.message=eval(this.operation);
    this.operation='';
    this.num='';
}
clear(){
  this.operation='';
  this.message='';
}
}
