import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { UiMaterialDesignModule } from '@angular-eBooks/ui-material-design';
import { UiGlobalModule } from '@angular-eBooks/ui-global';
import { UiCommonModule } from '@angular-eBooks/ui-common';
import { UiContentModule } from '@angular-eBooks/ui-content';
import { AppRoutingModule } from './app-routing.module';
import { ReactiveFormsModule } from '@angular/forms';
import { environment } from '../environments/environment';
import { ItemService } from './services/item.service';

import { AngularFireModule } from 'angularfire2';
import { AngularFirestoreModule } from 'angularfire2/firestore';

import { AppComponent } from './app.component';
import { GlobalLayoutComponent } from './global-layout/global-layout.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';

@NgModule({
  declarations: [
    AppComponent,
    GlobalLayoutComponent,
    SignInComponent,
    SignUpComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    UiMaterialDesignModule,
    UiCommonModule,
    UiGlobalModule,
    UiContentModule,
    AngularFireModule.initializeApp(environment.frebaseConfig),
    AngularFirestoreModule
  ],
  providers: [ItemService],
  bootstrap: [AppComponent]
})
export class AppModule { }
