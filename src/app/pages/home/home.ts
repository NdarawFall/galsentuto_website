import { Component } from '@angular/core';
import { Hero } from '../../components/hero/hero';
import { Services } from '../../components/services/services';
import { Courses } from '../../components/courses/courses';
import { Testimonials } from '../../components/testimonials/testimonials';

@Component({
  selector: 'app-home',
  imports: [Hero, Services, Courses, Testimonials],
  templateUrl: './home.html',
  styleUrl: './home.scss',
})
export class Home {

}
