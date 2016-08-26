import Ember from 'ember';

export default Ember.Component.extend({
  avgRate: Ember.computed('shop.reviews', function(){
    var total = 0;
    var number = this.get('shop.reviews.length');

    var ratings = this.get('shop.reviews').then(function(foos){
      console.log(foos.currentState);
      for(var foo in foos.currentState){
        console.log(foo);
      }
    });
    return number;
  })
});
