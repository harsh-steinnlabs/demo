import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-package',
  templateUrl: './package.component.html',
  styleUrls: ['./package.component.scss']
})
export class PackageComponent implements OnInit {
  packageList: any[];
  constructor(private router: Router) {
    this.packageList = [
      {
        name: 'Gold Package',
        key: 'Gold-Package',
        offline: 200,
        online: 300,
        expiryDate: '02.02.2017',
        image : '../../assets/gold.png'
      },
      {
        name: 'Silver Package',
        key: 'Silver-Package',
        offline: 100,
        online: 50,
        expiryDate: '04.07.2017',
        image : '../../assets/silver.png'
      },
      {
        name: 'Platinum Package',
        key: 'Platinum-Package',
        offline: 150,
        online: 400,
        expiryDate: '19.04.2017',
        image : '../../assets/silver.png'
      }
    ];
  }

  ngOnInit() {
  }

  goToDetails(e) {
    this.router.navigate([e, 'details']);
  }

}
