import { Component, ElementRef, Input, OnInit, QueryList, ViewChild, ViewChildren } from '@angular/core';
import { Observable } from 'rxjs/internal/Observable';
import { IMedia } from '../../services/data';

@Component({
  selector: 'app-media-container',
  templateUrl: './media-container.component.html',
  styleUrls: ['./media-container.component.scss']
})
export class MediaContainerComponent implements OnInit {
  @ViewChild('container')
  private container!: ElementRef;

  @ViewChildren('mediaCard', { read: ElementRef })
  private mediaCards!: QueryList<ElementRef>;

  @Input()
  public media!: Observable<IMedia[]>;

  @Input()
  public trendingContainer = false;

  get containerClass(): string {
    return this.trendingContainer ? 'trending-media-grid-container' : 'media-grid-container';
  }

  public onScroll(event: Event) {
    const scrollLeft = (event.target as Element).scrollLeft;
    const rightLimit = this.scrollWidth - this.clientWidth;
    // Left next button
    if (scrollLeft === 0) {
      this.showLeftNextButton = false;
    } else {
      this.showLeftNextButton = true;
    }

    // Right next button
    if (rightLimit <= scrollLeft) {
      this.showRightNextButton = false;
    } else {
      this.showRightNextButton = true;
    }
  }

  public showRightNextButton = true;
  public showLeftNextButton = false;

  get scrollWidth() {
    return this.container.nativeElement.scrollWidth;
  }

  get clientWidth() {
    return this.container.nativeElement.clientWidth;
  }

  constructor() { }

  ngOnInit(): void {
  }

  public scrollContainer(scrollToDirection: 'left'|'right') {
    const docWidth = document.documentElement.clientWidth;
    let toLeft = 0;
    let toRight = 0;
    let onScreen = 0;

    this.mediaCards.forEach(card => {
      const cardRect = card.nativeElement.getBoundingClientRect();
      // count how many are off screen to the left
      if (cardRect.left < 0) {
        toLeft++;

      // count how many are on the screen
      } else if (cardRect.right < docWidth) {
        onScreen++;

      // count number of cards to the right
      } else if (cardRect.right > docWidth) {
        toRight++;
      }
    });

    // Get either the next set that'll fit on the screen or the last|first one
    let scrollToIndex = 0;
    const len = this.mediaCards.length;

    if (scrollToDirection === 'right') {
      // Subtract 1 in (onScreen * 2 - 1) so we dont overflow the one slightly overflowing
      scrollToIndex = toRight - onScreen > 0 ? toLeft + (onScreen * 2 - 1) : len - 1;

    } else {
      scrollToIndex = toLeft - onScreen > 0 ? toLeft - onScreen : 0;
    }

    // Scroll into view
    this.mediaCards.get(scrollToIndex)?.nativeElement.scrollIntoView({ behavior: 'smooth', block: 'center' });
  }
}


