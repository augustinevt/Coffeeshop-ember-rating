import Ember from 'ember';

export default Ember.Component.extend({
  actions: {
    save(){
      var params = {
        author: this.get('author'),
        body: this.get('body'),
        rating: parseInt(this.get('rating')),
        image: "none",
        shop: this.get('shop'),
        timestamp: new Date("YYYY/MM/DD"),
      };
      this.sendAction('saveReview', params);
      this.set('author', '');
      this.set('body', '');
      this.set('rating', '');
    },
  }
});
