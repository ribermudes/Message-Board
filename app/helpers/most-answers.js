import Ember from 'ember';

export function mostAnswers(params) {
var popular = params[0];

 if(popular.get('answers').get('length') >= 2) {
   return Ember.String.htmlSafe('<span>&#9733;</span>');
 }
}




export default Ember.Helper.helper(mostAnswers);
