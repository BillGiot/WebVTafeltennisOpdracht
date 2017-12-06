import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewsDataService } from './news/news-data.service';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { AppRoutingModule } from './app-routing/app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { SerieService } from './series/serie.service';
import { BlogService } from './blog/blog.service';
import { AddMatchComponent } from './series/add-match/add-match.component';



@NgModule({
  declarations: [
    AppComponent,
    MenuComponent,
    FooterComponent,
    AddMatchComponent
  ],
  imports: [
    MaterializeModule,
    BrowserModule,
    ReactiveFormsModule,
    HttpModule,
    AppRoutingModule
  ],

  providers: [NewsDataService, SerieService, BlogService],
  bootstrap: [AppComponent]
})
export class AppModule { }

