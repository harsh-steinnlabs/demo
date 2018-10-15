import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PackageComponent } from './package/package.component';
import { NotFoundComponent } from './not-found/not-found.component';
import { PackageDetailsComponent } from './package-details/package-details.component';
import { ModalModule } from './shared/modal/modal.module';
import { UpgradeModalComponent } from './package-details/upgrade-modal/upgrade-modal.component';
import { AngularFontAwesomeModule } from 'angular-font-awesome';

@NgModule({
  declarations: [
    AppComponent,
    PackageComponent,
    NotFoundComponent,
    PackageDetailsComponent,
    UpgradeModalComponent
  ],
  imports: [
    BrowserModule,
    ModalModule,
    AngularFontAwesomeModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent],
  entryComponents: [UpgradeModalComponent]
})
export class AppModule { }
