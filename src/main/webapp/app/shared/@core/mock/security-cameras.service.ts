import { Injectable } from '@angular/core';
import { of as observableOf, Observable } from 'rxjs';
import { Camera, SecurityCamerasData } from '../data/security-cameras';

@Injectable()
export class SecurityCamerasService extends SecurityCamerasData {
  private cameras: Camera[] = [
    {
      title: 'Camera #1',
      source: 'content/images/ngx/camera1.jpg'
    },
    {
      title: 'Camera #2',
      source: 'content/images/ngx/camera2.jpg'
    },
    {
      title: 'Camera #3',
      source: 'content/images/ngx/camera3.jpg'
    },
    {
      title: 'Camera #4',
      source: 'content/images/ngx/camera4.jpg'
    }
  ];

  getCamerasData(): Observable<Camera[]> {
    return observableOf(this.cameras);
  }
}
