import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NewsDataService } from '../news-data.service';
import { NewsComponent } from '../news/news.component';
import { NewsitemComponent } from '../newsitem/newsitem.component';
import { PlayerComponent } from '../player/player.component';
import { SeriesComponent } from '../series/series.component';
import { BlogComponent } from '../blog/blog.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import {SideBarComponent} from '../series/side-bar/side-bar.component';
import { InternationalSeriesComponent } from '../series/international-series/international-series.component';
import { NationalSeriesComponent } from '../series/national-series/national-series.component';
import { RegionalComponent } from '../series/regional/regional.component';

const appRoutes: Routes = [
    { path: 'news', component: NewsComponent },
    { path: 'series', component: SeriesComponent },
     {path: 'blog', component: BlogComponent},
    {path: 'login', component: LoginComponent},
    { path: '', redirectTo: 'news', pathMatch: 'full'},
    { path: '**', component: PagenotfoundComponent}
  ];

  @NgModule({
    imports: [
      FormsModule,
      ReactiveFormsModule,
      MaterializeModule,
      CommonModule,
      RouterModule.forRoot(
        appRoutes
      ),
      ChartsModule
    ],
    declarations: [
        NewsComponent,
        NewsitemComponent,
        PlayerComponent,
        SeriesComponent,
        BlogComponent,
        PagenotfoundComponent,
        LoginComponent,
        SideBarComponent,
        InternationalSeriesComponent,
        NationalSeriesComponent,
        RegionalComponent
    ],
    exports: [
      RouterModule
    ],
    providers: [NewsDataService]
  })
export class AppRoutingModule { }