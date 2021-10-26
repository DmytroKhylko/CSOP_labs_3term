import { Component, OnChanges, OnInit } from '@angular/core';
import { favoriteVoterService } from 'src/services/favorite-voter.service';
import { Voter } from 'src/services/voter.service';
import { VoterService } from 'src/services/voter.service';
@Component({
  selector: 'app-voters',
  templateUrl: './voters.component.html',
  styleUrls: ['./voters.component.css']
})
export class VotersComponent implements OnInit, OnChanges {
    // voters: Voter[] = [
    //   {
    //   uuid: "27060381-e8a7-4e5f-818c-5595b568dfb4",
    //   name: "Emily Wotts",
    //   gender: "female",
    //   birthDate: "1980-07-01",
    //   age: "42"
    // },
    //   {
    //   uuid: "27060381-e8a7-4e5f-818c-5595b568dfb3",
    //   name: "David Brown",
    //   gender: "male",
    //   birthDate: "1970-07-01",
    //   age: "52"
    // },{
    //   uuid: "27060381-e8a7-4e5f-818c-5595b568dfbr",
    //   name: "Test user",
    //   gender: "male",
    //   birthDate: "1975-07-01",
    //   age: "47"
    // }
    // ];
    voters: Voter[] = [];
    favoriteVoters: Voter[] = [];
    // voters: any;
    constructor(private voterService: VoterService, private favoriteVoterService: favoriteVoterService) { }
    ngOnInit(): void {
        this.voterService.getVoters().subscribe(voters => {
          this.voters = voters.results.map((item:any) => {
            item.uuid = item.login.uuid;
            item.name = item.name.first + " " + item.name.last; 
            item.birthDate = item.dob.date.substring(0, 10);
            item.age = item.dob.age;
            return item
          })
          
        });
        console.log(this.voters)
        this.voters = this.voters
        this.favoriteVoters = this.favoriteVoterService.getfavoriteVoters();
    }
    ngOnChanges(){
      console.log("On change voters");
      
    }
    favoriteVotersChange(favoriteVoters: Voter[]){
      this.favoriteVoters = favoriteVoters;
      // console.log("favorite voters changed: change detected in voters component", this.favoriteVoters);
    }

}
