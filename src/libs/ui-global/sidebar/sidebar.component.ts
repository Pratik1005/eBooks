import { Component, OnInit } from '@angular/core';
import { SidebarRailService } from '@angular-eBooks/sys-utils';

@Component({
  selector: 'eb-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  isSelected = 'item1';
  isRailShowing;
  sidebarItems = [
    {name: 'home', id: 'item1', icon: 'home', showRail: true},
    {name: 'books', id: 'item2', icon: 'book', showRail: true},
    {name: 'bookmarks', id: 'item3', icon: 'bookmark', showRail: false},
    {name: 'haide', id: 'item4', icon: 'notifications', showRail: true},
    {name: 'blabla', id: 'item5', icon: 'import_contacts', showRail: false}
  ];

  constructor(private sidebarService: SidebarRailService) {}

  ngOnInit() {
    this.isRailShowing = true;
    this.sidebarService.getSiderailStatus(true);
  }

  selectIcon(item) {
    if (this.isSelected === item.id) {
      if (item.showRail) {
        this.sidebarService.getSiderailStatus(this.isRailShowing ? false : true);
        this.isRailShowing = this.isRailShowing ? false : true;
      }
    } else {
      this.isSelected = item.id;
      this.sidebarService.getSiderailStatus(item.showRail);
      this.isRailShowing = item.showRail;
    }
  }

}
