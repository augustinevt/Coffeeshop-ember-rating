import Ember from 'ember';

export default Ember.Component.extend({

  showFavorites: false,

  actions: {
    switchToFavorites(){
      this.set('showFavorites', true);
    },
    switchFromFavorites(){
      this.set('showFavorites', false);
    },
  },
});
