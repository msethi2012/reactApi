class NewsApi {

  static getAllNews() {
    let  url = 'https://newsapi.org/v2/top-headlines?' +
      'country=us&' +
      'apiKey=2a93510a060d4ce88a2ec8d9c7906619';
    let req = new Request(url);
   // console.log(response.json());

    return fetch(url)
      .then(function(response) {
        console.log(response.json());
      })
  }
}

export default NewsApi;
