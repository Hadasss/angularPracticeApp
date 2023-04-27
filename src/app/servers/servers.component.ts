import { Component, OnInit } from '@angular/core';

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
}
