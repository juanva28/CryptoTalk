import { Injectable, EventEmitter } from '@angular/core';
import { Http, Response } from '@angular/http';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/catch';
import { Observable } from 'rxjs/Rx';
import {environment} from '../environments/environment';

const BASE_DOMAIN = environment.baseUrl;
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
