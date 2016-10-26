import Ember from 'ember';

export default Ember.Route.extend({
  model() {
  return Ember.RSVP.hash({
    rentals: this.store.findAll('rental'),
    reviews: this.store.findAll('review')
  });
    //this.store means Firebase data store
    //finaA  method w/ argument=rental tell Ember Data to find all records of the type rental in the store, & return them to our application.
    // refactored for reviews -It allows us to load multiple JavaScript promises at once.
  },
  actions: {
    saveRental3(params) {
      var newRental = this.store.createRecord('rental', params);
      newRental.save();
      this.transitionTo('index');
      //save feature
    },

  saveReview(params) {
    var newReview = this.store.createRecord('review', params);
    newReview.save();
    this.transitionTo('index');
    }  
  }
});
