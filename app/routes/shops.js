import Ember from 'ember';

export default Ember.Route.extend({
  model(){
    return this.store.findAll('shop');
  },
  actions: {
    saveShop(params){
      var newShop = this.store.createRecord('shop', params);
      newShop.save();
      this.transitionTo('shops');
    },
  },
});
