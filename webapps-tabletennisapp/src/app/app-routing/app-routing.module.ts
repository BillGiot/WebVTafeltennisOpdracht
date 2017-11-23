import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule, Routes} from '@angular/router';
import { ReactiveFormsModule, FormsModule } from '@angular/forms';
import { MaterializeModule } from 'angular2-materialize';
import { ChartsModule } from 'ng2-charts/ng2-charts';
import { NewsDataService } from '../tabletennis-data.service';
import { NewsComponent } from '../news/news.component';
import { NewsDetailComponent} from '../news/news-detail/news-detail.component';
import { PlayerComponent } from '../club/player/player.component';
import { SeriesComponent } from '../series/series.component';
import { BlogComponent } from '../blog/blog.component';
import { PagenotfoundComponent } from '../pagenotfound/pagenotfound.component';
import { LoginComponent } from '../login/login.component';
import {SideBarComponent} from '../series/side-bar/side-bar.component';
import { RankingComponent } from '../series/ranking/ranking.component';
import { MatchesComponent } from '../series/matches/matches.component';
import { SearchComponent } from '../series/search/search.component';
import { ClubComponent } from '../club/club.component';
import { TeamComponent } from '../club/team/team.component';

const appRoutes: Routes = [
    { path: 'news', component: NewsComponent},
    { path: 'news/newsitem/:id', component: NewsDetailComponent},
    { path: 'series', component: SeriesComponent ,
      children : [
        { path: '', redirectTo: 'matches', pathMatch: 'full'},
        { path: 'ranking', component: RankingComponent },
        { path: 'matches', component: MatchesComponent}
    ]
},
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
        NewsDetailComponent,
        PlayerComponent,
        SeriesComponent,
        BlogComponent,
        PagenotfoundComponent,
        LoginComponent,
        SideBarComponent,
        RankingComponent,
        MatchesComponent,
        SearchComponent,
        ClubComponent,
        TeamComponent,
    ],
    exports: [
      RouterModule
    ],
    providers: [NewsDataService]
  })
export class AppRoutingModule {}
