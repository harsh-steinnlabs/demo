import { Component, OnInit, ViewChild, ViewContainerRef, Injector, HostListener } from '@angular/core';
import { ModalService } from './modal.service';

@Component({
  selector: 'app-modal-placeholder',
  templateUrl: './modal.component.html',
  styleUrls: ['./modal.component.scss']
})
export class ModalPlaceholderComponent implements OnInit {
  @ViewChild('modalplaceholder', { read: ViewContainerRef }) viewContainerRef;

  constructor(private modalService: ModalService, private injector: Injector) { }

  ngOnInit(): void {
    this.modalService.registerViewcontainerRef(this.viewContainerRef);
    this.modalService.registerInjector(this.injector);
  }

  @HostListener('document:click', ['$event.target'])
  onClick(targetElement) {
    if (targetElement.classList.contains('modal-wrapper')) {
      this.viewContainerRef.remove();
    }
  }

}
