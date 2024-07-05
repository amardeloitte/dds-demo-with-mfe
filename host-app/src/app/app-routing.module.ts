import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "load-table-mfe",
    children: [
      {
        path: "",
        outlet: 'table',
        loadChildren: () => 
          loadRemoteModule({
            remoteEntry: 'http://localhost:4500/remoteEntry.js',
            exposedModule: './TableModule',
            type: 'module'
          }).then(m => m.TableModule)
      },
      {
        path: "",
        outlet: 'tech',
        loadChildren: () => 
          loadRemoteModule({
            remoteEntry: 'http://localhost:4300/remoteEntry.js',
            exposedModule: './AngularTechModule',
            type: 'module'
          }).then(m => m.AngularTechModule)
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
