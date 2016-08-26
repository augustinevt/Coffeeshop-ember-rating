import Ember from 'ember';

export default Ember.Route.extend({

  model(){
    return this.store.findAll('shop');
  },
  showFavorites: true,
  actions: {
    saveShop(params){
      var newShop = this.store.createRecord('shop', params);
      newShop.save();
      this.transitionTo('shops');
    },
    switchToFavorites(){
      this.set('showFavorites', true);
    },
    switchFromFavorites(){
      this.set('showFavorites', false);
    },
  },
});
