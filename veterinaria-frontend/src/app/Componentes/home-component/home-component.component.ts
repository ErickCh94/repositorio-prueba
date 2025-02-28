import { Component, inject, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NgbCarousel, NgbCarouselModule, NgbSlideEvent, NgbSlideEventSource } from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-home-component',
  standalone: true,
  imports: [NgbCarouselModule],
  templateUrl: './home-component.component.html',
  styleUrl: './home-component.component.css'
})
export class HomeComponentComponent {
  router = inject(Router);
  images = [
    'https://firehouse.vet/wp-content/uploads/2023/06/FWP-Dr-Hill-cat-wellness-horiz-3-BEST-scaled-1.jpg',
    'https://kajabi-storefronts-production.kajabi-cdn.com/kajabi-storefronts-production/file-uploads/blogs/2147569900/images/8a0f66d-c653-c22-a52b-fb3b3c3f4717_dog-groomer-pomeranian-GettyImages-1383177683.jpg',
    'https://www.adelaide.edu.au/newsroom/sites/default/files/styles/ua_image/public/media/images/2021-06/uni-of-adelaide-vet-science-students-examining-a-patient.-resized.jpg?itok=CJNt6jYv'
  ];

  paused = false;
	unpauseOnArrow = false;
	pauseOnIndicator = false;
	pauseOnHover = true;
	pauseOnFocus = true;
  
	@ViewChild('carousel', { static: true }) carousel!: NgbCarousel;

	togglePaused() {
		if (this.paused) {
			this.carousel.cycle();
		} else {
			this.carousel.pause();
		}
		this.paused = !this.paused;
	}

	onSlide(slideEvent: NgbSlideEvent) {
		if (
			this.unpauseOnArrow &&
			slideEvent.paused &&
			(slideEvent.source === NgbSlideEventSource.ARROW_LEFT || slideEvent.source === NgbSlideEventSource.ARROW_RIGHT)
		) {
			this.togglePaused();
		}
		if (this.pauseOnIndicator && !slideEvent.paused && slideEvent.source === NgbSlideEventSource.INDICATOR) {
			this.togglePaused();
		}
  }

  guardarCitas(){
    this.router.navigate(['guardarCitas'])
  }

}

