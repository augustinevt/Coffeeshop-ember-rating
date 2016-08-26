import Ember from 'ember';

export function average(params/*, hash*/) {
  var reviews = params[0];
  reviews.forEach(function(review){
    console.log(review.rating);
  })
  return params;
}

export default Ember.Helper.helper(average);
