import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { galleryResource } from './gallery.resource';

@Injectable({
  providedIn: 'root'
})
export class Api {

  constructor(private http: HttpClient) {}

  // getGallery() {
  //   return galleryResource.get(this.http);
  // }
}
