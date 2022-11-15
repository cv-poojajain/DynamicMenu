import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WorkspaceComponent } from './workspace/workspace.component';

const routes: Routes = [
  // { path: '', redirectTo: 'workspace', pathMatch: 'full'},
  { path: '', component: WorkspaceComponent, pathMatch: 'full' },
  { path: ':id', component: WorkspaceComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
