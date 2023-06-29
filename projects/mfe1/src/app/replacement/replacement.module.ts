import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ReplacementListComponent } from './replacement-list/replacement-list.component';
import { RouterModule } from '@angular/router';
import { REPLACEMENT_ROUTES } from './replacement.routes';
import { AuthLibModule } from 'auth-lib';
import { SharedLibModule } from 'shared-lib';

@NgModule({
  imports: [
    CommonModule,
    AuthLibModule,
    SharedLibModule,
    RouterModule.forChild(REPLACEMENT_ROUTES)
  ],
  declarations: [
    ReplacementListComponent
  ]
})
export class ReplacementModule { }
