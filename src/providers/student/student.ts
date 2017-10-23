import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';
import { StudentDetail } from '../../mock/students/studentdetail.interface';

import { AngularFireDatabase, FirebaseListObservable } from 'angularfire2/database';
import { StudentMark } from '../../mock/students/studentmark.interface';


@Injectable()
export class StudentProvider {
  rankIndex:number;

  rank:any[] = [];

  studentTotal: any[]=[];

   student:any[] = [];
   studentsDetails = {} as StudentDetail;
   studentMark:StudentMark = { name: '', $key: '', tamilMark: '', englishMark: '', mathMark: '', total: '', rank: ''};
   stdDetail$: FirebaseListObservable<StudentDetail[]> ;
   stdMark$: FirebaseListObservable<StudentMark[]>;

   sortArray:any[] =[];
   
  constructor(
    public http: Http,
    private database: AngularFireDatabase) {
    this.stdDetail$ = this.database.list('student-detail');
    this.stdMark$ = this.database.list('student-Mark');
    this.stdMark$.subscribe((data)=>{
      data.filter((name)=>{
        this.studentTotal.push(name.total);
        // console.log(this.studentTotal.indexOf(name.total));
        this.rankIndex = this.studentTotal.indexOf(name.total);
        
        let sortTotal = this.studentTotal.sort(function(a,b){return b-a});

        this.rank =  this.studentTotal.map(function(v){ return sortTotal.indexOf(v)+1})

       console.log('Total index is', this.rankIndex)
         this.studentMark.rank = this.rankIndex
        console.log(this.studentMark.rank, 'rank is');
        // for(let i=0; i< rankIndex; i++) {          
             
        // this.studentMark.rank[i] = this.rank[i];
        // console.log(this.studentMark.rank, 'studentRank');
        // }
        
        //console.log(this.studentMark, "student Mark");
        //console.log(this.studentsDetails, "student Details");
        //let arrayVal = this.rank.values();
        //console.log(arrayVal.next().value , "arrayValues")
        
        console.log("Rank is",sortTotal, this.rank);
      })
    })
  }

  saveStudentDetail(student: StudentDetail){
    this.stdDetail$.push({
      name: student.name,
      age: student.age
    })
    console.log(student);
    //Reset our shopping item
    //this.studentsDetails  = {} as StudentDetail;
  }
  saveStudentMark(studentMark: StudentMark){
    // this.stdMark$.subscribe((data)=>{
    //   data.filter((name)=>{
    //     this.studentTotal.push(name.total);
    //     console.log(this.studentTotal);
    //     let sortTotal = this.studentTotal.sort(function(a,b){return b-a});

    //     this.rank =  this.studentTotal.map(function(v){ return sortTotal.indexOf(v)+1})
    //     console.log("Rank is",this.studentTotal, this.rank);
        
    //   })
    // })
 
    this.stdMark$.push({
      name: studentMark.name,
      tamilMark: studentMark.tamilMark,
      englishMark: studentMark.englishMark,
      mathMark: studentMark.mathMark,
      total: (studentMark.tamilMark-0)+ (studentMark.englishMark-0) + (studentMark.mathMark - 0),
      rank: this.studentMark.rank
    })
    
    // for(let i=0; i<this.rank.length; i++){
      
    // }
    console.log(studentMark, "studMark");

  }
  removeStudent(id){
    this.stdMark$.remove(id);
    alert('Delete successfully')
  }
  sortStudentTotal(studentMark: StudentMark){
    console.log(studentMark.total);
  }

  

}
