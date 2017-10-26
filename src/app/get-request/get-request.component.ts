import { Component, OnInit } from '@angular/core';
import { Http, Response } from "@angular/http";

@Component({
  selector: 'app-get-request',
  templateUrl: './get-request.component.html',
  styleUrls: ['./get-request.component.css']
})
export class GetRequestComponent implements OnInit {
  ProjectTeams: Object;
  //private ApiUrl = 'https://team-organizer.herokuapp.com/group';
  private ApiUrl = 'https://swapi.co/api/';
 

  constructor(private http:Http) { }

  ngOnInit() {
  }

  GetCall(): void {
    this.http.request(this.ApiUrl)
    .subscribe(( res:Response)=> {
      this.ProjectTeams = res.json();
    });

  }

}
