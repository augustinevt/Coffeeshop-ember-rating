import Ember from 'ember';

export default Ember.Service.extend({
  favorites: [],
  addShop(shop) {
    console.log('service add');
    this.get('favorites').addObject(shop);
    console.log(this.get('favorites'));
  },
  removeShop(shop) {
    this.get('favorites').addObject(shop);
  },
});
