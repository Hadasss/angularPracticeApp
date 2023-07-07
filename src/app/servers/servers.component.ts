import { Component, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.css'],
})
export class ServersComponent implements OnInit {
  public allowNewServer = false;
  public serverCreationStatus = 'No server created';
  public serverInputName = 'TestServer';
  public servers = ['TestServer', 'TestServer 2'];
  public toggleDisplay: boolean = false;
  public logs = [];

  constructor() {
    setTimeout(() => {
      this.allowNewServer = true;
    }, 2000);
  }

  ngOnInit(): void {}

  public onCreateServer() {
    this.serverCreationStatus = `Server was created! Name is: ${this.serverInputName}`;
    this.servers.push(this.serverInputName);
  }

  public onToggleDisplay(): void {
    this.toggleDisplay = !this.toggleDisplay;
    let currentLog = this.toggleDisplay;
    this.logs.push(currentLog);
    console.log(this.logs);
  }
}
