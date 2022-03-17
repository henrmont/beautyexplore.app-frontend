import { environment } from './../../../environments/environment';
import { Observable } from 'rxjs';
import { Post } from './post.model';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  constructor(
    private http: HttpClient
  ) { }

  base64ToFile(data: any, filename: any) {

    const arr = data.split(',');
    const mime = arr[0].match(/:(.*?);/)[1];
    const bstr = atob(arr[1]);
    let n = bstr.length;
    let u8arr = new Uint8Array(n);

    while(n--){
        u8arr[n] = bstr.charCodeAt(n);
    }

    return new File([u8arr], filename, { type: mime });
  }

  registerPost(data: Post): Observable<Post> {
    return this.http.post<Post>(`${environment.baseUrl}/api/register/post`, data)
  }

  getPosts(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/get/posts`)
  }

  getLikes(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/get/likes/${id}`)
  }

  like(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/like/${id}`)
  }

  getLiked(id: number): Observable<any> {
    return this.http.get(`${environment.baseUrl}/api/get/liked/${id}`)
  }

  // registerPlantao(data: any): Observable<any> {
  //   return this.http.post<any>(`${environment.baseUrl}/api/register/plantao`, data)
  // }

  // editPlantao(data: any, plantao: any): Observable<any> {
  //   return this.http.post<any>(`${environment.baseUrl}/api/edit/plantao/${data}`, plantao)
  // }

  // removePlantao(data: any): Observable<any> {
  //   return this.http.delete<any>(`${environment.baseUrl}/api/remove/plantao/${data}`)
  // }

  // evalutePlantao(data: any, plantao: any): Observable<any> {
  //   return this.http.post<any>(`${environment.baseUrl}/api/evalute/plantao/${data}`, plantao)
  // }

  // attachPlantao(data: any, plantao: any, filename: any): Observable<any> {
  //   return this.http.post<any>(`${environment.baseUrl}/api/attach/plantao/${plantao}/${filename}`, data)
  // }

  // getAllAttach(plantao: any): Observable<any> {
  //   return this.http.get<any>(`${environment.baseUrl}/api/get/all/attach/${plantao}`)
  // }

  // downloadAttach(filename: any) {
  //   return `${environment.baseUrl}/uploads/attach/${filename}`
  // }

  // removeAttach(id: any): Observable<any> {
  //   return this.http.get<any>(`${environment.baseUrl}/api/remove/attach/${id}`)
  // }

  // getAllPlantao(): Observable<any> {
  //   return this.http.get<any>(`${environment.baseUrl}/api/get/all/plantao`)
  // }

  // getAllUser(): Observable<any> {
  //   return this.http.get<any>(`${environment.baseUrl}/api/get/all/user`)
  // }

  // getById(id: any): Observable<any> {
  //   return this.http.get<any>(`${environment.baseUrl}/api/get/by/id/plantao/` + id);
  // }
}
