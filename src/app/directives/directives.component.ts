import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directives',
  templateUrl: './directives.component.html',
  styleUrls: ['./directives.component.css'],
})
export class DirectivesComponent implements OnInit {
  public showP = false;
  public clicks = [];
  public clickValue = 0;

  constructor() {}

  ngOnInit(): void {}

  public onButtonClick() {
    this.showP = !this.showP;
    this.clicks.push((this.clickValue += 1));
  }
}
