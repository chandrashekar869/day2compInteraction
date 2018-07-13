import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-component2',
  templateUrl: './component2.component.html',
  styleUrls: ['./component2.component.css']
})
export class Component2Component implements OnInit {
  serverId:number=20;
  serverStatus:string="Offline";
  buttonText:string="Make server online";
  constructor() { }

  ngOnInit() {
  }

  changeServerStatus(){
    if(this.serverStatus=="Offline"){
      this.serverStatus="Online";
      this.buttonText="Make server offline";
    }
    else if(this.serverStatus=="Online"){
      this.serverStatus="Offline";
      console.log(this.serverStatus);
      this.buttonText="Make server Online";
    }
  }

  getColor(){
    return this.serverStatus=='Online'?'green':'red';
  }
}
