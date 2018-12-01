import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Settings, AppSettings } from '../../app.settings';
import { SidenavMenuService } from '../../theme/components/sidenav-menu/sidenav-menu.service';



@Component({
    selector: 'app-sellers',
    templateUrl: './sellers.component.html',
    providers: [ SidenavMenuService ]
  })
  export class SellerComponent implements OnInit{
    public sidenavMenuItems:Array<any>;
    @ViewChild('sidenav') sidenav:any;
    public showBackToTop:boolean = false;

    public settings: Settings;
    constructor(public appSettings:AppSettings,
            public sidenavMenuService:SidenavMenuService, 
            public router:Router) { 
        this.settings = this.appSettings.settings; 
    }

    ngOnInit() {
        this.sidenavMenuItems = this.sidenavMenuService.getSellerSideNavMenuItems();
    }
  }