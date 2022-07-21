import { Injectable } from '@angular/core';
import { HttpClient} from '@angular/common/http';
import { environment } from '../../../environments/environment';
import { IPost } from '../../shared/interfaces/ipost';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  baseUrl = environment.baseUrl;

  constructor(private http: HttpClient) { }

  getDataPost(){
    return this.http.get<IPost[]>(`${this.baseUrl}/posts`);
  }

}
