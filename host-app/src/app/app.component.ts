import { Component, ElementRef, ViewChild} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'dds-demo-app';
  @ViewChild('ddsdemomodal')
  ddsdemomodal!: ElementRef<HTMLElement>;
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
    
      default:
        break;
    }


  }

  openModal() {
    this.ddsdemomodalInstance.open();
  }
}

