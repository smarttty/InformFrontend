import { module, test } from 'qunit';
import { setupTest } from 'ember-qunit';

module('Unit | Route | director', function(hooks) {
  setupTest(hooks);

  test('it exists', function(assert) {
    let route = this.owner.lookup('route:director');
    assert.ok(route);
  });
});
