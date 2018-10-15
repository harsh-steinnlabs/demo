import { Component, OnInit } from '@angular/core';
import { ModalContainer } from '../../shared/modal/modal.container';

@Component({
  selector: 'app-upgrade-modal',
  templateUrl: './upgrade-modal.component.html',
  styleUrls: ['./upgrade-modal.component.scss']
})
export class UpgradeModalComponent extends ModalContainer implements OnInit {

  constructor() {
    super();
  }

  ngOnInit() {
  }

  closeModal() {
    this.destroy();
  }

}
