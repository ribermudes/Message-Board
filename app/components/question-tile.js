import Ember from 'ember';

export default Ember.Component.extend({
  favoriteQuestions: Ember.inject.service(),
  answerTotal: Ember.computed('question.answers', function() {
   var answerResult = this.get('question.answers.length');
   return answerResult;
 }),

  updateQuestionForm: false,
  actions: {
    update(question, params){
      this.sendAction('update', question, params);
    },
    addQuestion(question) {
      this.get('questions').add(question);
    }
  }
});
