import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs';
import { News } from '../model/News.model';

@Injectable({
  providedIn: 'root'
})
export class HttpService {

  constructor(private HttpClient: HttpClient ) { }
  // get(){
  //   let url = "https://social.runwayclub.dev/api/articles/latest"
  //   return this.HttpClient.get(url).pipe(map((data: any) =>{ // HttpClient sẽ yêu cầu truyền dữ liệu từ sever => truyền dữ liệu xuống hạ nguồn thông qua "pipe" => sau đó trả về <News[]>data
  //     console.log(data)
  //     return <News[]>data;
  //   }))
  // }
}
