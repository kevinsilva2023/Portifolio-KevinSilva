import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePortifolioComponent } from './pages/home-portifolio/home-portifolio.component';
import { ProjetoSpotifyComponent } from './pages/projeto-spotify/projeto-spotify.component';

const routes: Routes = [
  {
    path: '',
    component: HomePortifolioComponent
  },
  {
    path: 'spotify',
    component: ProjetoSpotifyComponent
  }

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { 

  
}
