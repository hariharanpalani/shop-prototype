import { Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-seller-menu',
  template: `
  <mat-toolbar class="top-navbar mat-elevation-z2" fxLayoutAlign="center center">
    <a mat-button routerLink="/" routerLinkActive="horizontal-active-link" [routerLinkActiveOptions]="{exact:true}">Home</a>
    <a mat-button>RFQ</a>
    <a mat-button>Quotes</a>
    <a mat-button>Promotions</a>
    <a mat-button>Products</a>
</mat-toolbar>
  `
})
export class SellerMenuComponent implements OnInit {

  constructor() { }

  ngOnInit() { }
}
