import { Component, NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { WelcomeComponent } from './Pages/welcome/welcome.component';
import { QuestionsComponent } from './Pages/questions/questions.component';

const routes: Routes = [
  {
    path: '',
    component: WelcomeComponent,
  },
  { path: 'questions', component: QuestionsComponent },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
