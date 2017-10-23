import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentProvider } from '../../providers/student/student';
import { StudentMark } from '../../mock/students/studentmark.interface';

/**
 * Generated class for the StudentMarksPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-marks',
  templateUrl: 'student-marks.html',
})
export class StudentMarksPage {

  studentMark = {} as StudentMark;
  studentName:any[] = [];
  student: string [] =[];
  name:string;
  constructor(
     public navCtrl: NavController,
     public navParams: NavParams,
     private studentProvider: StudentProvider) {
       this.retriveStudentName();
  }
  retriveStudentName(){
    this.studentProvider.stdDetail$.subscribe((data)=>{
      this.studentName = data.filter((name)=>{
        console.log(name.name)
        this.student.push(name.name);
        //return(this.studentName.push(name.name));
      })
      console.log(this.student);
    })
    
  }

  saveMark(studentMark: StudentMark){
    this.studentProvider.saveStudentMark(studentMark);
    console.log(studentMark.total, "total is");
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentMarksPage');
  }

}
