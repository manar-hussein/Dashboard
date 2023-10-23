import { Component, ChangeDetectorRef, OnDestroy, ViewChild } from '@angular/core';
import {BreakpointObserver, MediaMatcher} from '@angular/cdk/layout';
import { MatSidenav } from '@angular/material/sidenav';


@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'DashBoard';
  @ViewChild(MatSidenav)
  sidenav!: MatSidenav;
  open:boolean=false;
  constructor(private observer: BreakpointObserver) {}

  ngAfterViewInit() {
    this.observer.observe(["(max-width: 800px)"]).subscribe((res) => {
      if (res.matches) {
        console.log(res,this.sidenav)
        this.sidenav.mode = "over";
        this.open=true
        this.sidenav.close();
      } else {
        this.open=false
        this.sidenav.mode = "side";
        this.sidenav.open();
      }
    });
  }
}
