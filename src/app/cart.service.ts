import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class CartService {

  constructor(private http: HttpClient) { }

  getAll(page, limit = 20) {
    return this.http.get(
      `https://5cafa607f7850e0014629525.mockapi.io/products?page=${page}&limit=${limit}`
    );
  }
}
