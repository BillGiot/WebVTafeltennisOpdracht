import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewsDataService } from './tabletennis-data.service';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    HttpModule,
    AppRoutingModule
  ],

  providers: [NewsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

