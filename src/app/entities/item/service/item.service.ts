import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { Category } from '../../category/model/category.model';
import { Item } from '../model/item.model';

@Injectable({
  providedIn: 'root'
})
export class ItemService {

  constructor(private http: HttpClient) { }

  public getAllItems(page: number, size: number, sort: string): Observable<Item[]> {
    const urlEndpoint: string = "http://localhost:8080/store/items?page=" + page + "&size=" + size + "&sort=" + sort;
    return this.http.get<Item[]>(urlEndpoint);
  }

  public getAllItemsByCategoryId(categoryId: number): Observable<Item[]> {
    const urlEndpoint: string = "http://localhost:8080/store/categories/" + categoryId + "/items";
    return this.http.get<Item[]>(urlEndpoint);
  }
}
