import NewsApi from '../api/newsApi';
import * as types from './actionTypes';
import {beginAjaxCall} from './ajaxStatusActions';

export function loadNewsSuccess(news) {
  return {type: types.LOAD_NEWS_SUCCESS, news};
}

export function loadNews() {
  return dispatch => {
    dispatch(beginAjaxCall());
    return NewsApi.getAllNews().then(news => {
      console.log("news--",news);
      dispatch(loadNewsSuccess(news));
    }).catch(error => {
      throw(error);
    });
  };
}
