import { Component, Input, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { ModalController, PopoverController } from '@ionic/angular';
import { MyReservationsPage } from 'src/app/pages/my-reservations/my-reservations.page';
import { SettingInfoComponent } from '../setting-info/setting-info.component';
import { MyClubsPage } from '../../pages/my-clubs/my-clubs.page';
import { CreateClubPage } from '../../pages/create-club/create-club.page';
import { ClubConfigPage } from '../../pages/club-config/club-config.page';
import { JoinClubComponent } from '../join-club-component/join-club-component';
import { EquiposService } from '../../services/equipos.service';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {
  @Input() titulo = '';
  @Input() menu1 : boolean;
  @Input() menu2 : boolean;
  @Input() findClubMenu : boolean;
  @Input() searchbar : boolean;
  @Input() menu4 : boolean;
  @Input() menu3: boolean;
  @Input() sideMenu : boolean;
  @Input() newClubmenu : boolean;
  url: string;
  invalidURL = ['/home/clubs','/test '];
  valid : boolean;

  constructor(public popoverCtrl: PopoverController, public route: Router, public modalCtrl: ModalController, public clubs: EquiposService) { }


  ngOnInit() {
  }


  async presentPopover(ev: any) {
    const popover = await this.popoverCtrl.create({
      component: SettingInfoComponent,
      cssClass: 'my-custom-class',
      event: ev,
      translucent: true,
      backdropDismiss: true
    });
    await popover.present();

  }


  async presentModal() {
  
    const modal = await this.modalCtrl.create({
      component: MyReservationsPage,
      cssClass: 'my-custom-class'
    });
    return await modal.present();
  }


}

