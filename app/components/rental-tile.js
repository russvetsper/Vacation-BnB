import Ember from 'ember';

export default Ember.Component.extend({
  isImageShowing: false,
  actions: {
    ImageShow: function() {
      this.set('isImageShowing', true);
    },
    imageHide:function() {
      this.set('isImageShowing', false);
    },
    delete(rental) {
      if (confirm('are you sure?')) {
        this.sendAction('destroyRental', rental);
      }
    }
  }
});
