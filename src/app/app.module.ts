import { NgModule }      from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule }    from '@angular/forms';
import { HttpModule } from '@angular/http';

import { AppComponent }  from './app.component';
import { routing }        from './app.routing';

import { AuthGuard } from './_guards/auth.guards';
import { AlertService} from './_services/alert.service';
import { AuthenticationService } from './_services/authentication.service';
import { UserService } from './_services/user.service';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { FileSearchComponent } from './file-search/file-search.component';
import { SearchResultComponent } from './search-result/search-result.component';
import { FileSearchService } from './_services/file-search.service';


@NgModule({
  declarations: [
    AppComponent,    
    LoginComponent,
    RegisterComponent,
    FileSearchComponent,
    SearchResultComponent      
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    routing
    
    
  ],
  providers: [AuthGuard, AlertService, AuthenticationService, UserService, FileSearchService],
  bootstrap: [AppComponent]
})
export class AppModule { }
