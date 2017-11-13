import { BrowserModule } from '@angular/platform-browser';
import { MaterializeModule } from 'angular2-materialize';
import { NgModule } from '@angular/core';
import { HttpModule } from '@angular/http';
import { AppComponent } from './app.component';
import { NewsComponent } from './news/news.component';
import { MenuComponent } from './menu/menu.component';
import { FooterComponent } from './footer/footer.component';
import { NewsitemComponent } from './newsitem/newsitem.component';
import { PlayerComponent } from './player/player.component';
import { ChartsModule } from 'ng2-charts/ng2-charts';

@NgModule({
  declarations: [
    AppComponent,
    NewsComponent,
    MenuComponent,
    FooterComponent,
    NewsitemComponent,
    PlayerComponent
  ],
  imports: [
    BrowserModule,
    MaterializeModule,
    HttpModule,
    ChartsModule
  ],

  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

