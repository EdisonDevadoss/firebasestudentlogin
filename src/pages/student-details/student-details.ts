import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams } from 'ionic-angular';
import { StudentDetail } from '../../mock/students/studentdetail.interface';
import { StudentProvider } from '../../providers/student/student';

/**
 * Generated class for the StudentDetailsPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-details',
  templateUrl: 'student-details.html',
})
export class StudentDetailsPage {

  student = {} as StudentDetail;
  display = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private studentProvider: StudentProvider) {
      this.readData();
  }
  studDetail(student: StudentDetail){
    this.studentProvider.saveStudentDetail(student);
  }
  readData(){
    this.studentProvider.stdDetail$.subscribe((data)=>{
      this.display = data;
      console.log(this.display);
    })
  }
  gotoStudentMarkPage(){
    this.navCtrl.push('StudentMarksPage');
  }
  studentsMarkList(){
    this.navCtrl.push('StudentMarkListPage');
  }

  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentDetailsPage');
  }

}
