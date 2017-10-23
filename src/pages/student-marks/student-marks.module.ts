import { NgModule } from '@angular/core';
import { IonicPageModule } from 'ionic-angular';
import { StudentMarksPage } from './student-marks';

@NgModule({
  declarations: [
    StudentMarksPage,
  ],
  imports: [
    IonicPageModule.forChild(StudentMarksPage),
  ],
})
export class StudentMarksPageModule {}
