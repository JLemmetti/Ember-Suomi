import Ember from 'ember';

const {
	computed
}  = Ember;

export default Ember.Controller.extend({
	sortParams: ['published:desc'],
	sorted: Ember.computed.sort('released', 'sortParams'),

	// TODO: Still needs page refres after release state has been changed
	// for a article
	released: computed.filter('model', function (article) {
		return article.get('released');
	})
});
