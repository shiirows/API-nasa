import { Component, OnInit } from '@angular/core';
import { Nasa } from '../space.model';
import { SpaceService } from '../space.service';

@Component({
  selector: 'app-planet',
  templateUrl: './planet.component.html',
  styleUrls: ['./planet.component.css']
})
export class PlanetComponent implements OnInit {

  nasas:Nasa[] = []

  public title: string = "";
  private service:SpaceService



  constructor(public param_service:SpaceService) { 
  this.service  =  param_service;
}

 public ngOnInit(): void {
  this.service.getnasa().subscribe(
    (param_nasas:Nasa[]) => {
        this.nasas  =  param_nasas;
    }
);}
}