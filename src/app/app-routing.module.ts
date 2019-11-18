import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {MyFeedComponent} from './pages/my-feed/my-feed.component';
import {MyThingsComponent} from './pages/my-things/my-things.component';
import {MyContactsComponent} from './pages/my-contacts/my-contacts.component';
import {EventsComponent} from './pages/events/events.component';


const routes: Routes = [
  {path: '', redirectTo: 'home', pathMatch: 'full'},
  {path: 'home', component: MyFeedComponent},
  {path: 'things', component: MyThingsComponent},
  {path: 'contacts', component: MyContactsComponent},
  {path: 'events', component: EventsComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
