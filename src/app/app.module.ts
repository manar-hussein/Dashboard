import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatListModule} from '@angular/material/list';
import {MatSidenavModule} from '@angular/material/sidenav';
import {MatIconModule} from '@angular/material/icon';
import {MatButtonModule} from '@angular/material/button';
import {MatToolbarModule} from '@angular/material/toolbar';
import { MatDividerModule } from '@angular/material/divider';
import { DashBoardComponent } from './dash-board/dash-board.component';
import { ProductsComponent } from './products/products.component';
import { HeaderComponent } from './header/header.component';
import { SidenaveComponent } from './sidenave/sidenave.component';
import { ButtonModule } from 'primeng/button';

import { DoughnutchartComponent } from './doughnutchart/doughnutchart.component';

import {MatInputModule} from '@angular/material/input';
import {MatSelectModule} from '@angular/material/select';
import { MenuIconComponent } from './menu-icon/menu-icon.component';




@NgModule({
  declarations: [
    AppComponent,
    DashBoardComponent,
    ProductsComponent,
    HeaderComponent,
    SidenaveComponent,
    DoughnutchartComponent,
    MenuIconComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    MatToolbarModule,
    MatSidenavModule,
    MatButtonModule,
    MatIconModule,
    MatDividerModule,
    ButtonModule,
    MatInputModule,
    MatSelectModule
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
