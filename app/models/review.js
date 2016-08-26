import DS from 'ember-data';

export default DS.Model.extend({
  author: DS.attr(),
  body: DS.attr(),
  image: DS.attr(),
  shop: DS.belongsTo('shop', {async: true}),
  rating: DS.attr(),
});
