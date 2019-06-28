import { Component, Input } from '@angular/core';

@Component({
  selector: 'ngx-slide-out',
  styleUrls: ['./slide-out.component.scss'],
  templateUrl: './slide-out.component.html'
})
export class SlideOutComponent {
  @Input() showVisitorsStatistics: boolean = false;

  toggleStatistics() {
    this.showVisitorsStatistics = !this.showVisitorsStatistics;
  }
}

// private alive = true;
//
// @Input() linesData: { firstLine: number[]; secondLine: number[] } = {
//   firstLine: [],
//   secondLine: []
// };
