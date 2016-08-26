import Ember from 'ember';

export default Ember.Component.extend({
  niceName: Ember.computed('shop.name', function(){
    var string = this.get('shop.name');
    return string.split('').map(function(char, index){
      if( index % 2 === 0){
        return char.toUpperCase();
      }else{
        return char;
      }
    }).join('');
  }),
});
