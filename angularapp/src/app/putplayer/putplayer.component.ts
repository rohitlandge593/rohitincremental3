import { Component, OnInit } from '@angular/core';
import { IplService } from '../ipl.service';
import { Router } from '@angular/router';
import { IPlayer } from '../Model/iplayer';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-putplayer',
  templateUrl: './putplayer.component.html',
  styleUrls: ['./putplayer.component.css']
})
export class PutplayerComponent implements OnInit {

  constructor(private service:IplService,private route:Router) { }

  isReady=false
  playerdata:IPlayer={Id:0,Age:0,Name:"",TeamId:0,Category:"",BiddingPrice:0}
  id:number

  editPlayer(p:IPlayer)
  {
    this.service.getPlayerById(this.id).subscribe((data:IPlayer)=>{
      this.playerdata=data; 
      this.isReady= true;
      console.log(this.playerdata);
    })
  }

  editPlayerData(player:IPlayer)
  {
    this.playerdata=player
    this.service.editPlayer(this.id,player).subscribe(()=>
    {
      alert('Record Edited')
      this.route.navigate(['/getplayers'])
  });
  }

  ngOnInit(): void {
  }

}











// constructor(private ms:MovieserviceService,private route:Router,private ar:ActivatedRoute) { }
//   moviedata:IMovie
//   id:number
// getMovie(id:number)
// { 
//   this.ms.getMovie(id).subscribe((data:IMovie)=>this.moviedata=data)
// }

// EditData(movie :IMovie)
// {
//   this.moviedata=movie
//   this.ms.editMovie(this.moviedata).subscribe(()=>
//   {
//     alert('Edited')
//     this.route.navigate(['/listmovies'])
//   })
// }
//   ngOnInit()
//    {
//     const tid=this.ar.snapshot.paramMap.get('id')
//     this.id=Number(tid)
//     this.getMovie(this.id)
//   }

// }