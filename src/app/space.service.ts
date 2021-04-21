import { Injectable } from '@angular/core';
import { HttpClient } from  '@angular/common/http';
import { Observable } from  'rxjs';
import { map } from  "rxjs/operators";
import { Nasa } from './space.model';
@Injectable({
  providedIn: 'root'
})
export class SpaceService {

  private  service:  HttpClient;

  constructor(param_service:  HttpClient) {
  this.service  =  param_service;
}

  private nasas:Nasa[] =[]

  public getnasa(): Observable<Nasa[]> {
    const  obs1:Observable<any> = this.service.get("assets/nasa.json");
    const  treatment  = ( param_data:any) => {
        return  param_data.nasas as  Nasa[];
    };
  
    return  obs1.pipe( map( treatment) );
  }
  
  public addnasa(nasa:Nasa){
    this.nasas.push(nasa)
  }

}
