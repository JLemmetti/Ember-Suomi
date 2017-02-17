import Ember from 'ember';

export default Ember.Controller.extend({
	isDeletingArticle: false,

	actions: {
		selectAuthor (author) {
			this.set('model.article.author', author);
		},
		confirmDeleteArticle () {
			this.set('isDeletingArticle', true);
		},
		cancelArticleDeletion () {
			this.set('isDeletingArticle', false);
		},
		deleteArticle (article) {
			article.deleteRecord();
			article.save();
			this.transitionToRoute('index');
		}
	}
});
