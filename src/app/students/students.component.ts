import { Component, OnInit } from '@angular/core';
import{DataService} from '../Services/data.service'


@Component({
  selector: 'app-students',
  templateUrl: './students.component.html',
  styleUrls: ['./students.component.css']
})
export class StudentsComponent implements OnInit {

  constructor(private service:DataService) { }
  studentData:any=[];
  weatherData:any=[];
  ngOnInit(): void {
    this.service.GetStudentData().subscribe(
      
      (data)=>{
        this.studentData = data.students;
      }
      );

      this.service.GetWeatherData().subscribe(
      
        (data)=>{
          this.weatherData = data.weather;
        }
        );
  }

}
