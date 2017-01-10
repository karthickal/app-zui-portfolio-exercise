import Ember from 'ember';

export default Ember.Route.extend({
  
  // route to handle /portfolio. read a list of portfolio items and also a list of stock items.
  model() {
    return Ember.RSVP.hash({
      portfolio: this.store.findAll('portfolio'),
      stock: this.store.findAll('stock')
    });
  },

  setupController(controller, model) {
    this._super(...arguments);
    Ember.set(controller, 'portfolio', model.portfolio);
    Ember.set(controller, 'stock', model.stock);
  }

});
