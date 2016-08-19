import Ember from 'ember';

export default Ember.Component.extend({
  addNewAnswer: false,
  actions: {
    showAnswerForm() {
      this.set('addAnswer', true);
    },
    saveAnswer() {
      var params = {
        user: this.get('user') ? this.get('user'):"",
        response: this.get('response') ? this.get('response'):"",
        question: this.get('question'),
      };
      this.set('addAnswer', false);
      this.sendAction('saveAnswer', params)
    }
  }
});
