import PouchDB from 'pouchdb';
import { Adapter } from 'ember-pouch';

// PouchDB.debug.enable('*');

let remote = new PouchDB('http://localhost:5984/ember_suomi_test');
let db = new PouchDB('local_pouch');

db.sync(remote, {
	live: true,   // do a live, ongoing sync
	retry: true   // retry if the conection is lost
});

export default Adapter.extend({
	db: db
});
