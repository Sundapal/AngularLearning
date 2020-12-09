import { Component, OnInit } from '@angular/core';
import { HttpClient, HttpHeaders} from '@angular/common/http';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit{
  title = 'CatalystWeb';
  data : any;
   constructor(
               private http: HttpClient,
             ) {
          }
  ngOnInit() {
    this.getData();
  };
 
  getData() {

    const httpOptions = {    headers: new HttpHeaders({'Content-Type': 'application/json'})     };
    this.http.get('http://localhost:60358/yield', httpOptions).subscribe((res) => {
      console.log("Yield:",res),
      this.data = res
    })
  }



}

