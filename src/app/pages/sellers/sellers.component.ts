import { Component, OnInit, HostListener, ViewChild } from '@angular/core';
import { Router, NavigationEnd } from '@angular/router';
import { Settings, AppSettings } from '../../app.settings';
import { SidenavMenuService } from '../../theme/components/sidenav-menu/sidenav-menu.service';
import { Category } from '../../app.models';
import { AppService } from '../../app.service';



@Component({
    selector: 'app-sellers',
    templateUrl: './sellers.component.html',
    providers: [ SidenavMenuService ]
  })
  export class SellerComponent implements OnInit{
    public sidenavMenuItems:Array<any>;
    @ViewChild('sidenav') sidenav:any;
    public showBackToTop:boolean = false;
    public categories:Category[];
    public category:Category;

    public settings: Settings;
    constructor(public appSettings:AppSettings,
            public appService:AppService, 
            public sidenavMenuService:SidenavMenuService,
            public router:Router) {
        this.settings = this.appSettings.settings;
    }

    ngOnInit() {
        this.getCategories();
        this.sidenavMenuItems = this.sidenavMenuService.getSellerSideNavMenuItems();
    }

    public getCategories(){    
        this.appService.getCategories().subscribe(data => {
          this.categories = data;
          this.category = data[0];
          this.appService.Data.categories = data;
        })
      }
    
    public changeCategory(event){
        if(event.target){
          this.category = this.categories.filter(category => category.name == event.target.innerText)[0];
        }
        if(window.innerWidth < 960){
          this.stopClickPropagate(event);
        } 
    }

    public stopClickPropagate(event: any){
        event.stopPropagation();
        event.preventDefault();
    }

    public search() {
        
    }
  }
