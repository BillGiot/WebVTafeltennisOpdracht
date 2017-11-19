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
import { NewsDataService } from './news-data.service';
import { RouterModule, Routes} from '@angular/router';
import { SeriesComponent } from './series/series.component';
import { BlogComponent } from './blog/blog.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component';

const appRoutes: Routes = [
  { path: 'news', component: NewsComponent },
  { path: 'series', component: SeriesComponent },
  {path: 'blog', component: BlogComponent},
  { path: '', redirectTo: 'news', pathMatch: 'full'},
  { path: '**', component: PagenotfoundComponent}
];

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
    RouterModule.forRoot(appRoutes),
    MaterializeModule,
    HttpModule,
    ChartsModule
  ],

  providers: [NewsDataService],
  bootstrap: [AppComponent]
})
export class AppModule { }

