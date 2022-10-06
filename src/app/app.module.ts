import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
import { QuestionsComponent } from './Pages/questions/questions.component';
import { HeaderComponent } from './Pages/header/header.component';
import { HttpClientModule } from '@angular/common/http';
import { QuizServiceService } from './service/quiz-service.service';
import { ChangeBgDirective } from './change-bg.directive';

@NgModule({
  declarations: [
    AppComponent,
    WelcomeComponent,
    QuestionsComponent,
    HeaderComponent,
    ChangeBgDirective,
  ],
  imports: [BrowserModule, AppRoutingModule, HttpClientModule],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
