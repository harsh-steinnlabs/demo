import { Component, OnInit, ComponentFactoryResolver } from '@angular/core';
import { ModalService } from '../shared/modal/modal.service';
import { UpgradeModalComponent } from './upgrade-modal/upgrade-modal.component';

@Component({
  selector: 'app-package-details',
  templateUrl: './package-details.component.html',
  styleUrls: ['./package-details.component.scss']
})
export class PackageDetailsComponent implements OnInit {
  currentPackage: any;
  constructor(private modalService: ModalService, private componentFactoryResolver: ComponentFactoryResolver) {
    this.currentPackage = {
      name: 'Gold Package',
      type: 'Standard Package',
      price: '250TL',
      online: '25/50 min',
      offline: '25/25 min',
      expiry: '02.02.2017'
    };
  }

  ngOnInit() {
  }

  upgradePackage() {
    const modal = this.componentFactoryResolver.resolveComponentFactory(UpgradeModalComponent);
    this.modalService.createFromFactory(modal, {

    });
  }

}
