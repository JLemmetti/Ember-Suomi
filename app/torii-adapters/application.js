import ToriiFirebaseAdapter from 'emberfire/torii-adapters/firebase';

export default ToriiFirebaseAdapter.extend({
	// https://github.com/Vestorly/torii#adapters-in-torii
	open (authorization) {
		return authorization;
	}
});