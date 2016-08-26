import Ember from 'ember';

export default Ember.Route.extend({
  model(params){
    return this.store.findRecord('shop', params.shop_id);
  },
  actions: {
    saveReview(params){
      console.log(params);
      var newReview = this.store.createRecord('review', params);
      var shop = params.shop;
      shop.get('reviews').addObject(newReview);
      newReview.save().then( function() {
        return shop.save();
      });
      this.transitionTo('shops.shop', shop.id);
    }
  }
});
