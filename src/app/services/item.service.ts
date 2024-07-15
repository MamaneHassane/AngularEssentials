import {inject, Injectable} from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";
import {item} from "../model/item";

@Injectable({
  providedIn: 'root'
})
export class ItemService {
  // The http client
  httpClient: HttpClient = inject(HttpClient);
  // Get all items
  getAllItems() : Observable<item[]> {
    return this.httpClient.get<item[]>("")
  }
  constructor() { }
}
