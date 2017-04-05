import Ember from 'ember';

export default Ember.Component.extend({
	isDeletingArticle: false,

	actions: {
		selectAuthor (author) {
			this.sendAction('action', author);
		},
		saveArticle (article) {
			this.sendAction('submit', article);
		},
		confirmDeleteArticle () {
			this.set('isDeletingArticle', true);
		},
		cancelArticleDeletion () {
			this.set('isDeletingArticle', false);
		},
		deleteArticle (article) {
			this.sendAction('deleteArticle', article);
		}
	}
});
