import {Component, OnInit, WritableSignal} from '@angular/core';
import { RouterLink } from '@angular/router';
import { Button } from "primeng/button";
import { MenuItem } from "primeng/api";
import menuItems from '../constants/MenuItems';
import {SidebarModule} from "primeng/sidebar";

@Component({
  selector: 'app-custom-sidebar',
  standalone: true,
  imports: [
    RouterLink,
    Button,
    SidebarModule
  ],
  templateUrl: './custom-sidebar.component.html',
  styleUrl: './custom-sidebar.component.css'
})
export class CustomSidebarComponent implements OnInit{
  items: MenuItem[] | undefined;
  sidebarVisible: boolean = true;

  ngOnInit(){
    this.items = menuItems
    console.log(`The items are ${JSON.stringify(this.items)}`)
  }

}
