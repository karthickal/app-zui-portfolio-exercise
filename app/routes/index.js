import Ember from 'ember';

export default Ember.Route.extend({
  
  // route to handle home page. get list of stock models and return to view.
  model() {
    return Ember.RSVP.hash({
      stock: this.store.findAll('stock')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'stock', model.stock);
  }

});
