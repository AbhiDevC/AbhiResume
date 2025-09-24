import { Component, AfterViewInit, ViewChild, ElementRef } from '@angular/core';
import EmblaCarousel, { EmblaCarouselType } from 'embla-carousel';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css'],
})
export class EducationComponent implements AfterViewInit {
  trainings = [
    {
      title: "Master's in Computer Science",
      institution: 'Carleton University',
      description:
        'Studied advanced topics in computer science including AI, machine learning, and software engineering.',
      year: '2018 - 2020',
      image: 'assets/images/Carleton.png',
    },
    {
      title: "Bachelor's in Computer Science",
      institution: 'Punjab Technical University',
      description:
        'Focused on foundational computer science topics like algorithms, data structures, and software development.',
      year: '2014 - 2018',
      image: 'assets/images/PTU.png',
    },
    // Add more trainings here
  ];

  @ViewChild('carousel', { static: true })
  carouselRef!: ElementRef<HTMLElement>;
  private embla!: EmblaCarouselType;

  ngAfterViewInit() {
    this.embla = EmblaCarousel(this.carouselRef.nativeElement, {
      loop: true,
      align: 'center', // left-align current card
      skipSnaps: false, // scroll one card per click
    });
  }

  next() {
    this.embla?.scrollNext();
  }
  prev() {
    this.embla?.scrollPrev();
  }
}
