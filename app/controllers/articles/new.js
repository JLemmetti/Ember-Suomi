import Ember from 'ember';

export default Ember.Controller.extend({
	createSlug (title) {
		return title.toString().toLowerCase().trim()
			.replace(/\s+/g, '-') // Replace spaces with -
			.replace(/\-\-+/g, '-') // Replace multiple - with single -
			.replace(/ä/g, 'a')
			.replace(/ö/g, 'o')
			.replace(/&/g, 'ja') // Replace '&' with 'ja'
			.replace(/[\s\W-]+/g, '-'); // Replace all non-word chars with -
	},

	actions: {
		selectAuthor (author) {
			this.set('model.article.author', author);
		},
		saveArticle (article) {

			article.set('author', article.get('author'));

			// Set the artile to publication date only if it's also set to be released
			if (article.get('released')) {
				article.set('published', new Date());
			}

			let slug = this.createSlug(article.get('title'));

			article.set('slug', slug);

			article.save().then(article => this.transitionToRoute('articles.article', article.id, { queryParams: {a: slug}}));
		}
	}
});
