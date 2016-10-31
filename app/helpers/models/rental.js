import DS from 'ember-data';

export default DS.Model.extend({

  //attributes
owner:DS.attr(),
city: DS.attr(),
type: DS.attr(),
image: DS.attr(),
bedrooms: DS.attr(),
reviews: DS.attr('review', { async: true }),
cost: DS.attr()

});
