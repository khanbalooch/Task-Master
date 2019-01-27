import { Component } from '@angular/core';
import { NavParams, ModalController, PopoverController } from '@ionic/angular';
import * as _ from 'lodash';

@Component({
  selector: 'colors',
  templateUrl: 'colors.html'
})
export class ColorsComponent {

  colors: any[] = [];
  selected_colors: any[] = [];
  rows: any[];
  constructor(
    public modalController: ModalController,
    private navParams: NavParams
  ) {
    this.colors = colors;
    this.rows = Array.from(Array(Math.ceil(this.colors.length / 4)).keys());
  }

  close(color) {
    this.modalController.dismiss(color);
  }
}

let colors = [
  "#d968aa",
  "#eb7b54",
  "#212ba2",
  "#028851",
  "#6dd23a",
  "#8be403",
  "#2f9e1b",
  "#0c36c9",
  "#487c68",
  "#e79458",
  "#63cc16",
  "#2e8e8e",
  "#1e9ff7",
  "#259344",
  "#196615",
  "#662a20",
  "#5bb632",
  "#7f34a0",
  "#234af0",
  "#8ffe88",
  "#b6c33f",
  "#51c4ac",
  "#844b5d",
  "#fd99c3",
  "#f037c3",
  "#2051f3",
  "#08fdad",
  "#71e00e",
  "#ab03af",
  "#e0c776",
  "#e73bcc",
  "#d07ef4",
  "#d15695",
  "#c2b70d",
  "#e771a9",
  "#4a70f3",
  "#dc7772",
  "#b3607a",
  "#3ce348",
  "#96071a"
]
