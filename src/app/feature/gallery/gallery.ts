import { CommonModule } from '@angular/common';
import { AfterViewInit, Component, ElementRef, ViewChild } from '@angular/core';

@Component({
  selector: 'app-gallery',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './gallery.html',
  styleUrl: './gallery.css',
})
export class GalleryComponent implements AfterViewInit {
  @ViewChild('thumbnailContainer') thumbnailContainer!: ElementRef;
  currentIndex = 0;
  private touchStartX = 0;
  private touchEndX = 0;

  images = [
    {
      url: '/assets/joshua-sortino-XMcoTHgNcQA-unsplash.jpg',
      alt: 'Gallery Image 1',
    },
    {
      url: '/assets/1045-2.jpg',
      alt: 'Gallery Image 2',
    },
    {
      url: '/assets/joshua-sortino-XMcoTHgNcQA-unsplash.jpg',
      alt: 'Gallery Image 3',
    },
    {
      url: '/assets/1045-2.jpg',
      alt: 'Gallery Image 4',
    },
    {
      url: '/assets/joshua-sortino-XMcoTHgNcQA-unsplash.jpg',
      alt: 'Gallery Image 5',
    },
    {
      url: '/assets/1045-2.jpg',
      alt: 'Gallery Image 4',
    },
    {
      url: '/assets/joshua-sortino-XMcoTHgNcQA-unsplash.jpg',
      alt: 'Gallery Image 5',
    },
    {
      url: '/assets/1045-2.jpg',
      alt: 'Gallery Image 4',
    },
    {
      url: '/assets/joshua-sortino-XMcoTHgNcQA-unsplash.jpg',
      alt: 'Gallery Image 5',
    },
    {
      url: '/assets/1045-2.jpg',
      alt: 'Gallery Image 4',
    },
    {
      url: '/assets/joshua-sortino-XMcoTHgNcQA-unsplash.jpg',
      alt: 'Gallery Image 5',
    },
  ];

  ngAfterViewInit() {
    // Initial scroll to active thumbnail
    setTimeout(() => this.scrollToActiveThumbnail(), 100);
  }

  get currentImage() {
    return this.images[this.currentIndex];
  }

  nextImage() {
    this.currentIndex = (this.currentIndex + 1) % this.images.length;
    this.scrollToActiveThumbnail();
  }

  previousImage() {
    this.currentIndex = (this.currentIndex - 1 + this.images.length) % this.images.length;
    this.scrollToActiveThumbnail();
  }

  goToImage(index: number) {
    this.currentIndex = index;
    this.scrollToActiveThumbnail();
  }

  private scrollToActiveThumbnail() {
    if (!this.thumbnailContainer) return;

    const container = this.thumbnailContainer.nativeElement;
    const thumbnails = container.querySelectorAll('.thumbnail');
    const activeThumbnail = thumbnails[this.currentIndex] as HTMLElement;

    if (activeThumbnail) {
      const containerWidth = container.offsetWidth;
      const thumbnailLeft = activeThumbnail.offsetLeft;
      const thumbnailWidth = activeThumbnail.offsetWidth;

      // Calculate the scroll position to center the active thumbnail
      const scrollPosition = thumbnailLeft - containerWidth / 2 + thumbnailWidth / 2;

      container.scrollTo({
        left: scrollPosition,
        behavior: 'smooth',
      });
    }
  }

  onTouchStart(event: TouchEvent) {
    this.touchStartX = event.changedTouches[0].screenX;
  }

  onTouchEnd(event: TouchEvent) {
    this.touchEndX = event.changedTouches[0].screenX;
    this.handleSwipe();
  }

  private handleSwipe() {
    const swipeThreshold = 50; // Minimum distance to be considered a swipe
    const diff = this.touchStartX - this.touchEndX;

    if (Math.abs(diff) > swipeThreshold) {
      if (diff > 0) {
        // Swipe left - next image
        this.nextImage();
      } else {
        // Swipe right - previous image
        this.previousImage();
      }
    }
  }
}
