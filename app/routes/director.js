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
  },

  putJSON(url, data) {
    return new Promise(function(resolve, reject){
      let xhr = new XMLHttpRequest();
      xhr.withCredentials = true;

      xhr.open('PUT', url);
      xhr.onreadystatechange = handler;
      xhr.responseType = 'json';
      xhr.setRequestHeader("Content-Type", "application/json;charset=UTF-8");
      xhr.setRequestHeader('Accept', 'application/json');
      xhr.setRequestHeader('X-Requested-With', 'XMLHttpRequest');
      xhr.send(data);


      function handler() {
        if (this.readyState === this.DONE) {
          if (this.status === 204) {
            resolve(this.response);
          } else {
            reject(new Error('getJSON: `' + url + '` failed with status: [' + this.status + ']'));
          }
        }
      }
    });
  },

  actions: {
    save() {
      let model = this.get('controller.model');
      this.putJSON(`http://localhost:52006/api/Directors/${model.primarykey}`, JSON.stringify(model));
    }
  }
});
