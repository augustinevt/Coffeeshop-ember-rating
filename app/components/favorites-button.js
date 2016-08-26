import Ember from 'ember';

export default Ember.Component.extend({
  favorites: Ember.inject.service(),
  actions: {
    add(shop){
      this.get('favorites').addShop(shop);
    }
  }
});
