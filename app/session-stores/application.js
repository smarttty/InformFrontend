import CookieStore from 'ember-simple-auth/session-stores/cookie';

export default CookieStore.extend({
  cookieDomain: 'http://localhost:4200',
  cookieName: '.AspNetCore.Cookies'

});
