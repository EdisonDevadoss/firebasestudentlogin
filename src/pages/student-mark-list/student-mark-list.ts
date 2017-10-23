import { Component } from '@angular/core';
import { IonicPage, NavController, NavParams, ActionSheetController } from 'ionic-angular';
import { StudentProvider } from '../../providers/student/student';
import { StudentMark } from '../../mock/students/studentmark.interface';

/**
 * Generated class for the StudentMarkListPage page.
 *
 * See https://ionicframework.com/docs/components/#navigation for more info on
 * Ionic pages and navigation.
 */

@IonicPage()
@Component({
  selector: 'page-student-mark-list',
  templateUrl: 'student-mark-list.html',
})
export class StudentMarkListPage {
    studentMarkList = [];
    studentTotal: number[] = [];
    rank:number[] = [];
  constructor(
    public navCtrl: NavController, 
    public navParams: NavParams,
    private studentProvider: StudentProvider,
    private actionSheet: ActionSheetController) {

      this.studentProvider.stdMark$
       .subscribe((data)=>{
        this.studentMarkList = data;
        console.log(this.studentMarkList);

        // data.filter((name)=>{
 
        //   this.studentTotal.push(name.total);
        //   console.log(this.studentTotal);
        //   let sortTotal = this.studentTotal.sort(function(a,b){return b-a});

        //   this.rank =  this.studentTotal.map(function(v){ return sortTotal.indexOf(v)+1})
        //   console.log("Rank is",this.studentTotal, this.rank);
          
        // })
       })


  }
  remove(studentMark: StudentMark){
    this.actionSheet.create({
      title:studentMark.name,
      buttons:[
        {
          text:'Delete',
          role: 'destructive',
          handler:()=>{
           this.studentProvider.removeStudent(studentMark.$key);
          }
        }
      ]
    }).present();
    
  }
  ionViewDidLoad() {
    console.log('ionViewDidLoad StudentMarkListPage');
  }

}
