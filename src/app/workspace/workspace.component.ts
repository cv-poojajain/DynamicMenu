import { Component, OnInit } from '@angular/core';
import { Menu } from '../model/menu';
import { MenuItems } from '../model/menu-items';
import { CommonService } from '../service/common.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-workspace',
  templateUrl: './workspace.component.html',
  styleUrls: ['./workspace.component.css']
})
export class WorkspaceComponent implements OnInit {

  array = {} as Menu;
  // subArray = [] as MenuItems[];
  // arg: any
  isSubmenuSelected = false;
  routeParam = '';
  currentRoute = '';
  constructor(private service: CommonService, private active: ActivatedRoute, private route: Router) { }

  ngOnInit(): void {
    this.data('Workspace');
    this.active.params.subscribe((res: any) => {
      console.log(res)
      this.currentRoute = res.id;
    })
  }
  isBigEnough(element: Menu, selectedItem: string) {
    return (element.name === selectedItem) ? element : null
  }
  data(name: string) {
    if(name === 'Workspace') {
       this.isSubmenuSelected = false;
       this.routeParam = 'Workspace';
      // this.routeParam = this.routeParam + name;
      // this.route.navigate(['', this.routeParam])
      this.route.navigate(['', this.routeParam])
    }

    this.service.getJSON().subscribe(
      (data: any) => {
        data.forEach((item: Menu) => {
          var mm = this.isBigEnough(item, name);
          if (mm) {
            this.array = mm
          }
        });
      }
    );
  }

  subData() {
    // this.service.getJSON().subscribe((data: MenuItems[])=>{
    //   console.log("data inner", data)

    //    this.subArray = data
    //     console.log("the json data inner", this.subArray)
    //  })
  }
  back() {
    // this.isSubmenuSelected = false;
    var str = this.currentRoute;
    var newRoute = this.currentRoute;

    var lastIndex = str.lastIndexOf("-");

    str = str.substring(0, lastIndex);
    var lastIndex1 = str.lastIndexOf("-");

    newRoute = str.substring(lastIndex1 + 1, str.length)
    console.log(newRoute)
    this.data(newRoute)
    this.currentRoute = str;
    this.route.navigate(['', this.currentRoute])
   
  }
  navigateTo(data: string){
    if (data != 'Workspace') {
      this.routeParam = this.routeParam + '-' + data;
    } else {
      this.routeParam = this.routeParam + data;
    }
    this.route.navigate(['', this.routeParam])
  }
  selectMenu(menuitem: string) {
    switch (menuitem) {
      case 'Group':
        this.isSubmenuSelected = true;
        this.data('Group');
        this.navigateTo('Group');
        break;
      case 'Objective':
        this.isSubmenuSelected = true;
        this.data('Objective');
        this.navigateTo('Objective');
        break;
      case 'Goal':
        this.isSubmenuSelected = true;
        this.data('Goal');
        this.navigateTo('Goal');
        break;
      case 'Project':
        this.isSubmenuSelected = true;
        this.data('Project');
        this.navigateTo('Project');
        break;
      case 'Epic':
        this.isSubmenuSelected = true;
        this.data('Epic');
        this.navigateTo('Epic');
        break;
      case 'Sprint':
        this.isSubmenuSelected = true;
        this.data('Sprint');
        this.navigateTo('Sprint');
        break;
      case 'Area':
        this.isSubmenuSelected = true;
        this.data('Area');
        this.navigateTo('Area');
        break;
      case 'Ticket':
        this.isSubmenuSelected = true;
        this.data('Ticket');
        this.navigateTo('Ticket');
        break;
      case 'Task':
        this.isSubmenuSelected = true;
        this.data('Task');
        this.navigateTo('Task');
        break;
      case 'Meeting':
        this.isSubmenuSelected = true;
        this.data('Meeting');
        this.navigateTo('Meeting');
        break;
      case 'List':
        this.isSubmenuSelected = true;
        this.data('List');
        this.navigateTo('List');
        break;
      case 'Checklist':
        this.isSubmenuSelected = true;
        this.data('Checklist');
        this.navigateTo('Checklist');
        break;
      case 'Note':
        this.isSubmenuSelected = true;
        this.data('Note');
        this.navigateTo('Note');
        break;
      case 'Scheduler':
        this.isSubmenuSelected = true;
        this.data('Scheduler');
        this.navigateTo('Scheduler');
        break;
      case 'Kanban':
        this.isSubmenuSelected = true;
        this.data('Kanban');
        this.navigateTo('Kanban');
        break;
      case 'Research':
        this.isSubmenuSelected = true;
        this.data('Research');
        this.navigateTo('Research');
        break;
      case 'Flow':
        this.isSubmenuSelected = true;
        this.data('Flow');
        this.navigateTo('Flow');
        break;
      case 'Charts':
        this.isSubmenuSelected = true;
        this.data('Charts');
        this.navigateTo('Charts');
        break;
        default:
        break;
    }
  }
}
