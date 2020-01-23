import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {RouterModule} from '@angular/router';
import {AsideComponent} from './components/aside/aside.component';
import {HeaderComponent} from './components/header/header.component';
import {TooltipDirective} from './directives/tooltip.directive';
import {NgxFilesizeModule} from 'ngx-filesize';
import {OrderByPipe} from './pipes/order-by.pipe';



const sharedComponents = [
  AsideComponent,
  HeaderComponent,
  TooltipDirective,
  OrderByPipe
];

@NgModule({
  imports: [CommonModule, RouterModule, NgxFilesizeModule],
  declarations: [...sharedComponents],
  exports: [...sharedComponents],
})
export class SharedModule {
}
