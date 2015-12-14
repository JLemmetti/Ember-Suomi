import Ember from 'ember';

export default Ember.Controller.extend({
	actions: {
		createArticle () {
			let article = this.store.createRecord('article', {
			title: this.get('title'),
			body: this.get('body')
		});
		article.save();

		this.set('title', '');
		this.set('isCompleted', false);
		},

		deleteArticle (article) {
			article.deleteRecord();
			article.save();
		}
	}
});
