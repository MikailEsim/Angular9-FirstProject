import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PipesComponent } from './pipes/pipes.component';
import { FormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { MyFilteringPipe, TlPipe } from 'src/libs';

const routes: Routes = [
  {
    path: "",
    component: PipesComponent
  },
];

@NgModule({
  declarations: [PipesComponent,TlPipe,MyFilteringPipe],
  imports: [
    CommonModule,
    RouterModule.forChild(routes),
    FormsModule
  ]
})
export class PipesModule { }
