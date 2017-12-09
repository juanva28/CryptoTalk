import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';


const BASE_DOMAIN = 'http://localhost:3000';
const BASE_URL = `${BASE_DOMAIN}`;

@Injectable()
export class DataService {
  options:object = {
    withCredentials:true
  }

  constructor(private http: Http) {}

  getData(type) {
      console.log("entrando")
      return this.http.get(`${BASE_URL}/${type}`, this.options)
        .map((res) => res.json());
    }
}
