import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { GetPlayerComponent } from './get-player/get-player.component';
import { HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './menu/menu.component';
import { AddplayerComponent } from './addplayer/addplayer.component';
import { IplService } from './ipl.service';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { PutplayerComponent } from './putplayer/putplayer.component';
import { GetplayerbyidComponent } from './getplayerbyid/getplayerbyid.component';
import { RouterModule } from '@angular/router';
import { DeletePlayerComponent } from './delete-player/delete-player.component';
import { GetTeamsComponent } from './get-teams/get-teams.component';
import { AddteamsComponent } from './addteams/addteams.component';
import { EditteamsComponent } from './editteams/editteams.component';
import { DeleteteamsComponent } from './deleteteams/deleteteams.component';

@NgModule({
  declarations: [
    AppComponent,
    GetPlayerComponent,
    MenuComponent,
    AddplayerComponent,
    PutplayerComponent,
    GetplayerbyidComponent,
    DeletePlayerComponent,
    GetTeamsComponent,
    AddteamsComponent,
    EditteamsComponent,
    DeleteteamsComponent,
    
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    RouterModule
  ],
  providers: [IplService],
  bootstrap: [AppComponent]
})
export class AppModule { }
