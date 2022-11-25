import Controller from '@ember/controller';
import { inject as service } from '@ember/service'

export default Controller.extend({
  session: service(),

  actions: {
    login() {
      this.session.authenticate('authenticator:core', {
        userName: this.login,
        password: this.password
      }).then(() => {
        this.transitionToRoute('director-list');
      });
    }
  }
});
