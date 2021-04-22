import { Component, OnInit } from '@angular/core';
import { SpaceService } from './space.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'apollo';

  public imgOfTheDay: string = '';
  private service: SpaceService;

  constructor(param_service: SpaceService) {
    this.service = param_service;
  }

  public ngOnInit(): void {
    this.service.getImageOfTheDay().subscribe((param_url: string) => {
      this.imgOfTheDay = param_url;
    });
  }
}

