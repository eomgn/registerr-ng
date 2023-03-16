import { Observable } from 'rxjs';
import { HomeModel } from './../../features/home/home.model';
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class HomeService {

  urlBase:string = 'http://localhost:3000/messages'

  homeModel: HomeModel[] = []

  constructor(private http: HttpClient) { }

  create(homeModel: HomeModel):Observable<HomeModel>{
    return this.http.post<HomeModel>(this.urlBase, homeModel)
  }

  read(): Observable<HomeModel[]> {

    return this.http.get<HomeModel[]>(this.urlBase)
  }

  readById(id: number): Observable<HomeModel> {
    const url = `${this.urlBase}/${id}`

    return this.http.get<HomeModel>(url)
  }


  

  delete(id: number): Observable<HomeModel> {
    const url = `${this.urlBase}/${id}`

    return this.http.delete<HomeModel>(url)
  }
}
