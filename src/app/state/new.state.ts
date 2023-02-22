import { News } from "../model/News.model";


export interface newState{
  news: News[],
  loading: boolean,
  isSuccess: boolean,
  error: string,

}
