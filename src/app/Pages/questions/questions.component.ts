import { Component, OnInit } from '@angular/core';
import { QuizServiceService } from 'src/app/service/quiz-service.service';
import { HttpClient } from '@angular/common/http';
import { interval } from 'rxjs';
import { threadId } from 'worker_threads';

@Component({
  selector: 'app-questions',
  templateUrl: './questions.component.html',
  styleUrls: ['./questions.component.scss'],
})
export class QuestionsComponent implements OnInit {
  public name: string = 'yadhu';
  questionList: any = [];
  currentQuestion: number = 0;
  points: number = 0;
  counter: number = 60;
  correctAnswer: number = 0;
  incorrectAnswer: number = 0;
  interval$: any;
  progress: string = '0';
  isQuizCompleted: boolean = false;

  constructor(private quiz_service: QuizServiceService) {}

  ngOnInit(): void {
    this.name = localStorage.getItem('name')!;
    this.getQuestions();
    this.startCounter();
  }

  getQuestions() {
    this.quiz_service.getJson().subscribe((data) => {
      this.questionList = data.questions;
    });
  }
  nextQuestion() {
    this.currentQuestion++;
  }
  prevQuestion() {
    this.currentQuestion--;
  }

  answer(currentQno: number, item: any) {
    if (currentQno === this.questionList.length) {
      this.isQuizCompleted = true;
      this.stopCounter();
    }
    if (item.correct) {
      this.points += 10;
      this.correctAnswer++;
      setTimeout(() => {
        this.currentQuestion++;
        this.getProgress();
        this.resetCounter();
      }, 1000);
    } else {
      setTimeout(() => {
        this.currentQuestion++;
        this.incorrectAnswer++;
        this.getProgress();
      }, 1000);
      this.points -= 10;
    }
  }
  startCounter() {
    this.interval$ = interval(1000).subscribe((val) => {
      this.counter--;
      if (this.counter === 0) {
        this.currentQuestion++;
        this.counter = 60;
        this.points -= 10;
      }
    });
    setTimeout(() => {
      this.interval$.unsubscribe();
    }, 600000);
  }
  stopCounter() {
    this.interval$.unsubscribe();
    this.counter = 0;
  }
  resetCounter() {
    this.stopCounter();
    this.counter = 60;
    this.startCounter();
    // this.currentQuestion = 0;
  }
  resetQuiz() {
    this.resetCounter();
    this.getQuestions();
    this.points = 0;
    this.counter = 60;
    this.currentQuestion = 0;
    this.progress = '0';
  }
  getProgress() {
    this.progress = (
      (this.currentQuestion / this.questionList.length) *
      100
    ).toString();
    return this.progress;
  }
}
