import { Component } from '@angular/core';
import { DataPlaceholderService } from '../../shared/services';
import { Router } from '@angular/router';

@Component({
  selector: 'page-setting',
  templateUrl: 'setting.html',
})
export class SettingPage {

  contact: any;

  constructor(
    public navCtrl: Router,
    private dataService: DataPlaceholderService
  ) { }

  ionViewDidLoad() {
    this.contact = this.dataService.mi;
  }

}
