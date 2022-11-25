import Base from 'ember-simple-auth/authenticators/base';
import { inject as service } from '@ember/service';
import config from '../config/environment';

export default Base.extend({

  ajax: service('ajax'),

  authenticate(options) {
    return this.get('ajax').raw(`${config.APP.backendUrl}/auth/login`, {
      method: 'POST',
      contentType: 'application/json',
      dataType: "text",
      data: options,
      xhrFields: { withCredentials: true }
    });
  },

  invalidate(data) {
  }
});
