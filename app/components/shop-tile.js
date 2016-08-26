import Ember from 'ember';

export default Ember.Component.extend({

  avgRate: Ember.computed('shop.reviews', function(){
    var tep = this.get('shop.reviews').map(function(review){
      return review.author;
    });
    console.log(tep);
  })
});
