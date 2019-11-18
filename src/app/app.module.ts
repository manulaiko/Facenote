import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/header/header.component';
import { NavigationComponent } from './components/navigation/navigation.component';
import { UserHeroComponent } from './components/user-hero/user-hero.component';
import { FooterComponent } from './components/footer/footer.component';
import { MyFeedComponent } from './pages/my-feed/my-feed.component';
import { MyThingsComponent } from './pages/my-things/my-things.component';
import { MyContactsComponent } from './pages/my-contacts/my-contacts.component';
import { EventsComponent } from './pages/events/events.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    NavigationComponent,
    UserHeroComponent,
    FooterComponent,
    MyFeedComponent,
    MyThingsComponent,
    MyContactsComponent,
    EventsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
