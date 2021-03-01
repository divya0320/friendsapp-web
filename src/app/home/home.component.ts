import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { FriendDetailsService } from '../service/friend-details.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  public  selectedElement;
  public  users;
  public  friends;
  public  title="";
  
    friendDetailsForm:FormGroup;
  
    validMessage: string ="";
  
    constructor(private friendDetailsService:FriendDetailsService) { }
  
    ngOnInit(){
      this.friendDetailsForm = new FormGroup({
        id:new FormControl('',Validators.required)
      });
      this.cleanUp();
      this.fetchDtails();
    }
  cleanUp() {

    this.friends=[];
    this.title="";
  }
  
  
    fetchDtails(){
      this.cleanUp();
      this.friendDetailsService.getUserDetails().subscribe(    
        data => {this.users=data},
        err => console.error(err),
        () => console.log('users loaded'));

    }

    getFriendListQuery(id:number){
      this.cleanUp();
      this.friendDetailsService.getUserFriendDetails(id).subscribe(    
        data => {this.friends=data,
          this.title = "List of Friends"
        },
        err => console.error(err),
        () => console.log('friends loaded'));
  
    }
    getSuggestedFriendListGenographicallyQuery(id:number){
      this.cleanUp();
      this.friendDetailsService.getSuggestedFriendListGenographicallyQuery(id).subscribe(    
        data => {this.friends=data,
        this.title = "List of Suggested Friends Geographically"},
        err => console.error(err),
        () => console.log('suggested friends loaded'));
  
    }

    getSuggestedFriendListQuery(id:number){
      this.cleanUp();
      this.friendDetailsService.getUserSuggestedFriendDetails(id).subscribe(    
        data => {this.friends=data,
        this.title = "List of Suggested Friends"},
        err => console.error(err),
        () => console.log('Georaphically suggested friends loaded'));
  
    }
  

}
