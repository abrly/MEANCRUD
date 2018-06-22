import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule} from '@angular/forms';
import { HttpClient } from '@angular/common/http';




import { AppComponent } from './app.component';
import { BookComponent } from './book/book.component';



@NgModule({
  declarations: [
    AppComponent,
    BookComponent,
    HttpClient

  ],
  imports: [
    BrowserModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
