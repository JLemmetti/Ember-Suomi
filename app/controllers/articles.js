import Ember from 'ember';

const {
	computed
}  = Ember;

export default Ember.Controller.extend({
	sortParams: ['published:desc'],
	sortedArticles: Ember.computed.sort('model', 'sortParams')
});
