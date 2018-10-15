import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpgradeModalComponent } from './upgrade-modal.component';

describe('UpgradeModalComponent', () => {
  let component: UpgradeModalComponent;
  let fixture: ComponentFixture<UpgradeModalComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpgradeModalComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpgradeModalComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
