import Ember from 'ember';

export function rating(params/*, hash*/) {
  var rating = params[0];
  if (rating > 5){
    return  '#####';
  }else if (rating === 4){
    return  '####';
  } else if (rating === 3){
    return  '###';
  } else if (rating === 2){
    return '##';
  }  else if (rating <= 1 ){
    return '#';
  }
}

export default Ember.Helper.helper(rating);
