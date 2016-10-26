import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
    //this.store means Firebase data store
    //finaA  method w/ argument=rental tell Ember Data to find all records of the type rental in the store, & return them to our application.
  },
  actions: {
  destroyRental(rental) {
    rental.destroyRecord();
    this.transitionTo('index');
    }
  }
});
