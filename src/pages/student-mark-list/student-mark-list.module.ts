import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentMarkListPage } from './student-mark-list';

@NgModule({
  declarations: [
    StudentMarkListPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentMarkListPage),
  ],
})
export class StudentMarkListPageModule {}
