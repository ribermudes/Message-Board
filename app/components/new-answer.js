import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addNewAnswer', true);
    },
    saveAnswer() {
      var params = {
        user: this.get('user', '') ? this.get('user'):"",
        response: this.get('response', '') ? this.get('response'):"",
        question: this.get('question') ? this.get('question'):"",
      };
      this.set('addNewAnswer', false);
      this.sendAction('saveAnswer', params);
    }
  }
});
