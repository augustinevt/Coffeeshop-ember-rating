import Ember from 'ember';

export default Ember.Route.extend({
  favorites: Ember.inject.service('favorites'),
  actions: {
    add(shop){
      this.get('favorites').addShop(shop);
    }
  }
});
