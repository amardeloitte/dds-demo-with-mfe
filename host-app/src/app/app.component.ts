import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';
import { COLUMN_DATA, COLUMN_DATA_PAGINATION, TABLE_DATA, TABLE_DATA_WITH_PAGINATION } from './table-data';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'dds-demo-app';
  @ViewChild('ddsdemomodal')
  ddsdemomodal!: ElementRef<HTMLElement>;
  @ViewChild('tableElement') tableElement!: ElementRef<HTMLElement>;
  @ViewChild('tableElementPagination') tableElementPagination!: ElementRef<HTMLElement>;
  @ViewChild('paginationElement') paginationElement!: ElementRef<HTMLElement>;
  ddsdemomodalInstance:any;
  selectedComponent:string = '';

  ngAfterViewInit() {
    this.initializeDDS();
  }

  initializeDDS() {
    const element = document.getElementById("sidenav-740523883");
    new DDS.SideNav(element);
  }

  changeComponent(component:any) {
    this.selectedComponent = component;
    switch (component) {
      case 'Modal':
        setTimeout(() => {
          this.ddsdemomodalInstance = new DDS.Modal(this.ddsdemomodal.nativeElement);
        });
        
        break;
      case 'Revision':
        const data = [
          { columns: [{ value: 437513181 }, { value: "Premier" }, { value: "07/01/2024" }, { value: "Warning" }] },
          { columns: [{ value: 515022624 }, { value: "DSA" }, { value: "06/27/2024" }, { value: "Success" }] },
          { columns: [{ value: 398189576 }, { value: "GSCM" }, { value: "07/07/2024" }, { value: "Pending" }] },
          { columns: [{ value: 529652119 }, { value: "DFS" }, { value: "07/01/2024" }, { value: "Pending" }] },
          { columns: [{ value: 965740288 }, { value: "AI/ML" }, { value: "07/02/2023" }, { value: "Success" }] },
          { columns: [{ value: 582157796 }, { value: "AI/ML" }, { value: "07/03/2024" }, { value: "Error" }] },
          { columns: [{ value: 825926198 }, { value: "Premier" }, { value: "07/01/2024" }, { value: "Blocked" }] },
          { columns: [{ value: 125858104 }, { value: "DSA" }, { value: "07/02/2023" }, { value: "Pending" }] },
          { columns: [{ value: 323591475 }, { value: "APEX" }, { value: "07/03/2024" }, { value: "Success" }] },
          { columns: [{ value: 246873350 }, { value: "GC" }, { value: "07/01/2024" }, { value: "Pending" }] },
          { columns: [{ value: 393465949 }, { value: "Dev Ex" }, { value: "07/07/2024" }, { value: "Pending" }] },
          { columns: [{ value: 854940581 }, { value: "UMF" }, { value: "08/02/2024" }, { value: "Success" }] },
          { columns: [{ value: 378253524 }, { value: "UMF" }, { value: "06/27/2024" }, { value: "Warning" }] },
          { columns: [{ value: 330351239 }, { value: "APEX" }, { value: "07/07/2024" }, { value: "Success" }] },
          { columns: [{ value: 835211008 }, { value: "Dev Ex" }, { value: "07/01/2024" }, { value: "Success" }] },
          { columns: [{ value: 806509218 }, { value: "APEX" }, { value: "07/02/2023" }, { value: "Pending" }] },
          { columns: [{ value: 744208307 }, { value: "AI/ML" }, { value: "06/02/2024" }, { value: "Error" }] },
          { columns: [{ value: 825588599 }, { value: "UMF" }, { value: "07/01/2024" }, { value: "Success" }] },
          { columns: [{ value: 945661150 }, { value: "DSA" }, { value: "07/03/2024" }, { value: "Success" }] },
          { columns: [{ value: 889747392 }, { value: "DFS" }, { value: "07/03/2024" }, { value: "Success" }] },
          { columns: [{ value: 457638061 }, { value: "GC" }, { value: "06/02/2024" }, { value: "Error" }] },
          { columns: [{ value: 255756698 }, { value: "GC" }, { value: "07/02/2023" }, { value: "Warning" }] },
          { columns: [{ value: 316229719 }, { value: "GSCM" }, { value: "07/01/2024" }, { value: "Success" }] },
          { columns: [{ value: 775443699 }, { value: "GSCM" }, { value: "07/02/2023" }, { value: "Error" }] },
          { columns: [{ value: 812397657 }, { value: "Premier" }, { value: "07/02/2025" }, { value: "Error" }] },
          { columns: [{ value: 878502207 }, { value: "GSCM" }, { value: "07/03/2024" }, { value: "Warning" }] },
          { columns: [{ value: 112124954 }, { value: "DFS" }, { value: "08/02/2024" }, { value: "Pending" }] },
          { columns: [{ value: 219892719 }, { value: "APEX" }, { value: "07/03/2024" }, { value: "Pending" }] },
          { columns: [{ value: 506523355 }, { value: "APEX" }, { value: "07/01/2024" }, { value: "Warning" }] },
          { columns: [{ value: 769470685 }, { value: "GC" }, { value: "07/01/2024" }, { value: "Success" }] },
          { columns: [{ value: 563026388 }, { value: "APEX" }, { value: "07/03/2024" }, { value: "Pending" }] },
          { columns: [{ value: 518322465 }, { value: "GC" }, { value: "06/27/2024" }, { value: "Warning" }] },
        ];
        const columns = [{ value: "Ticket ID" }, { value: "Team" }, { value: "Date" }, { value: "Status" }];
        setTimeout(() =>{
          new DDS.Table(this.tableElementPagination.nativeElement, {
            data,
            columns,
            subscribe: [this.paginationElement.nativeElement.id], // ID of Pagination Element to check changes when pagination element is accessed to change pages.
            pagination: { currentPage: 1, rowsPerPage: 4 },
          });
      
          /* Initialising the pagination  */
          new DDS.Pagination(this.paginationElement.nativeElement, {
            subscribe: [this.tableElementPagination.nativeElement.id], // ID of Table Element to check changes when pagination element is accessed to change pages.
          });
        });
        
        break;
    
      default:
        break;
    }


  }

  openModal() {
    this.ddsdemomodalInstance.open();
  }
}
