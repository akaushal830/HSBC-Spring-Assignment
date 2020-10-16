import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HelloWorldComponent } from './hello-world/hello-world.component';
import { UserItemComponent } from './user-item/user-item.component';
import { UserListComponent } from './user-list/user-list.component';
import { UserModelComponent } from './user-model/user-model.component';
import { PropBindComponent } from './prop-bind/prop-bind.component';
import { EventEgComponent } from './event-eg/event-eg.component';
import { UserManagerComponent } from './user-manager/user-manager.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { EmpInfoComponent } from './emp-info/emp-info.component';

@NgModule({
  declarations: [
    AppComponent,
    HelloWorldComponent,
    UserItemComponent,
    UserListComponent,
    UserModelComponent,
    PropBindComponent,
    EventEgComponent,
    UserManagerComponent,
    PeopleListComponent,
    OrderDetailsComponent,
    EmpInfoComponent
  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
