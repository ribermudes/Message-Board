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
    addfavoriteQuestions(question) {
      this.get('favoriteQuestions').add(question);
    }
  }
});
