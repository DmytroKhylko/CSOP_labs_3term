import { Component, Input, OnInit, SimpleChange } from '@angular/core';
import { Voter, VoterService } from 'src/services/voter.service';
import {animate, state, style, transition, trigger} from '@angular/animations';


@Component({
  selector: 'app-root',
  // templateUrl: './app.component.html',
  // animations: [
  //   trigger('detailExpand', [
  //     state('collapsed', style({height: '0px', minHeight: '0'})),
  //     state('expanded', style({height: '*'})),
  //     transition('expanded <=> collapsed', animate('225ms cubic-bezier(0.4, 0.0, 0.2, 1)')),
  //   ]),
  // ],
  template:'<router-outlet></router-outlet>',
  styleUrls: ['./app.component.css']
})
export class AppComponent{
    // voters: Voter[] = [
    //   {
    //   uuid: "27060381-e8a7-4e5f-818c-5595b568dfb4",
    //   name: "Emily Wotts",
    //   gender: "female",
    //   birhDate: "1980-07-01",
    //   age: "42"
    // }
    // ];
    // // voters: any;
    // constructor(private voterService: VoterService) { }
    // ngOnInit(): void {
    //     // this.voters = this.voterService.getVoters();
    //     console.log(this.voters)
    //     this.voters = this.voters
    // }
}

