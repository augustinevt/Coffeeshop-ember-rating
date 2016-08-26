import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      var params = {
        name: this.get('name'),
        description: this.get('description'),
        image: this.get('image')
      };
      console.log(params);
      this.sendAction('saveShop', params);
    },
  }
});
