import { HttpClientModule } from '@angular/common/http';
import { RouterOutlet } from '@angular/router';
import { CommonModule } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { ApiService } from './api.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
	imports: [
    RouterOutlet,
    CommonModule, 
    HttpClientModule,
  ],
  providers: [ApiService],
	standalone: true,
})

export class AppComponent {
  movies = [{id:1,title:'peli1',desc:'comedia',year:2021},{id:2,title:'peli2',desc:'tragedia',year:2022}];
  constructor(private api:ApiService) {
    this.getMovies();
  }
  getMovies = () => {
    this.api.getAllMovies().subscribe(
      data => {
        console.log(data);
        //this.movies = data;  //data.results;
      },
      error => {
        console.log(error);
			}
		);
	} 	
}