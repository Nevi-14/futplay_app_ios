import { NgModule } from '@angular/core';
import { PreloadAllModules, RouterModule, Routes } from '@angular/router';

const routes: Routes = [

  {
    path: '',
    redirectTo: 'inicio',
    pathMatch: 'full'
  },
  {
    path: 'inicio',
    loadChildren: () => import('./pages/inicio/inicio.module').then( m => m.InicioPageModule)
  },
  {
    path: 'password-reset',
    loadChildren: () => import('./pages/password-reset/password-reset.module').then( m => m.PasswordResetPageModule)
  },
  {
    path: 'home',
    loadChildren: () => import('./pages/home/home.module').then( m => m.HomePageModule)
  },
  {
    path: 'profile',
    loadChildren: () => import('./pages/profile/profile.module').then( m => m.ProfilePageModule)
  },
  {
    path: 'clubs',
    loadChildren: () => import('./pages/clubs/clubs.module').then( m => m.ClubsPageModule)
  },
  {
    path: 'search',
    loadChildren: () => import('./pages/search/search.module').then( m => m.SearchPageModule)
  },
  {
    path: 'reservations',
    loadChildren: () => import('./pages/reservations/reservations.module').then( m => m.ReservationsPageModule)
  },
  {
    path: 'transferencias',
    loadChildren: () => import('./pages/transferencias/transferencias.module').then( m => m.TransferenciasPageModule)
  },
  {
    path: 'create-club',
    loadChildren: () => import('./pages/create-club/create-club.module').then( m => m.CreateClubPageModule)
  },
  {
    path: 'rivales',
    loadChildren: () => import('./pages/rivales/rivales.module').then( m => m.RivalesPageModule)
  },
  {
    path: 'clasificacion',
    loadChildren: () => import('./pages/clasificacion/clasificacion.module').then( m => m.ClasificacionPageModule)
  },
  {
    path: 'checkout',
    loadChildren: () => import('./pages/checkout/checkout.module').then( m => m.CheckoutPageModule)
  },
  {
    path: 'location',
    loadChildren: () => import('./pages/location/location.module').then( m => m.LocationPageModule)
  },

  
  {
    path: 'my-clubs',
    loadChildren: () => import('./pages/my-clubs/my-clubs.module').then( m => m.MyClubsPageModule)
  },
  {
    path: 'my-reservations',
    loadChildren: () => import('./pages/my-reservations/my-reservations.module').then( m => m.MyReservationsPageModule)
  },
 

  {
    path: 'confirmed',
    loadChildren: () => import('./pages/confirmed/confirmed.module').then( m => m.ConfirmedPageModule)
  },

  {
    path: 'profile-info',
    loadChildren: () => import('./pages/profile-info/profile-info.module').then( m => m.ProfileInfoPageModule)
  },
  {
    path: 'password',
    loadChildren: () => import('./pages/password/password.module').then( m => m.PasswordPageModule)
  },
  {
    path: 'payment-method',
    loadChildren: () => import('./pages/payment-method/payment-method.module').then( m => m.PaymentMethodPageModule)
  },

  {
    path: 'filter',
    loadChildren: () => import('./pages/filter/filter.module').then( m => m.FilterPageModule)
  },
  {
    path: 'club-config',
    loadChildren: () => import('./pages/club-config/club-config.module').then( m => m.ClubConfigPageModule)
  },


  {
    path: 'equipo-solicitud',
    loadChildren: () => import('./pages/equipo-solicitud/equipo-solicitud.module').then( m => m.EquipoSolicitudPageModule)
  },
  {
    path: 'reto-detalle',
    loadChildren: () => import('./pages/reto-detalle/reto-detalle.module').then( m => m.RetoDetallePageModule)
  },
  {
    path: 'calendar-page',
    loadChildren: () => import('./pages/calendar-page/calendar-page.module').then( m => m.CalendarPagePageModule)
  },






];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

