import PouchDB from 'pouchdb';
import {Adapter} from 'ember-pouch';
import config from '../config/environment';

// PouchDB.debug.enable('*');

let remote = new PouchDB(`http://localhost:5984/${config.APP.remoteDB}`);
let db = new PouchDB(config.APP.localDB);

db.sync(remote, {
	live: true,   // do a live, ongoing sync
	retry: true   // retry if the conection is lost
});

export default Adapter.extend({
	// TODO: Figure out why local DB fails to populate stuff
	// from remote DB when the page is loaded for the first time
	db: remote
});
