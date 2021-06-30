import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { TopnavComponent } from './components/topnav/topnav.component';
import { SidenavComponent } from './components/sidenav/sidenav.component';

const components = [
  TopnavComponent,
  SidenavComponent
];

@NgModule({
  declarations: [
    ...components
  ],
  imports: [
    CommonModule
  ],
  exports: [
    ...components
  ]
})
export class SharedModule { }
