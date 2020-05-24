import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpClientModule }    from '@angular/common/http';
import { ReactiveFormsModule } from '@angular/forms';
import { NgxDataTableModule} from "angular-9-datatable";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { FooteComponent } from './components/foote/foote.component';
import { HomeComponent } from './components/home/home.component';
import { Punto1Component } from './components/punto1/punto1.component';
import { Punto2Component} from './components/punto2/punto2.component';
import { Punto3Component } from './components/punto3/punto3.component';
import { DatatableClientsComponent } from './components/datatableClients/datatable-clients.component';
import { Punto4Component } from './components/punto4/punto4.component';
 
@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooteComponent,
    HomeComponent,
    Punto1Component,
    Punto2Component,
    Punto3Component,
    DatatableClientsComponent,
    Punto4Component
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    NgxDataTableModule,
    HttpClientModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }