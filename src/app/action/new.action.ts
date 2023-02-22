import { createAction, props } from "@ngrx/store";
import { News } from "../model/News.model";

// export const GetNews = createAction('[News] Get News');
export const GetPaginate = createAction('[News] Get Paginate', props<{page: number, per_page: number}>());
export const getNewsSuccess = createAction('[News] Get News Success', props<{news: News[] }>());
export const getNewsFailure = createAction('[News] Get News Failure', props<{error: string}>());
