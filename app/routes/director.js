import Route from '@ember/routing/route';

export default Route.extend({

  model(params) {
    return this.getJSON(`http://localhost:52006/api/Directors/${params.id}`).then((d) => d);
  },

  getJSON(url) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.open('GET', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send();


      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 200) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      }
    });
  }
});
