import Ember from 'ember';

export default Ember.Route.extend({
  model() {
    return this.store.findAll('rental');
    //this.store means Firebase data store
    //finaA  method w/ argument=rental tell Ember Data to find all records of the type rental in the store, & return them to our application.
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
      //save feature
    },

  destroyRental(rental) {
    rental.destroyRecord();
    this.transitionTo('index');

    //Delete feature
    }
  }
});
