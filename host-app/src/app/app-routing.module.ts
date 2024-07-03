import { loadRemoteModule } from '@angular-architects/module-federation';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: "load-table-mfe",
    loadChildren: () => 
      loadRemoteModule({
        remoteEntry: 'http://localhost:4500/remoteEntry.js',
        exposedModule: './TableModule',
        type: 'module'
      }).then(m => m.TableModule)
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
