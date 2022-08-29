import {openDB} from 'idb';

const dbPromise = openDB('NOOTY-V1', 1, {
  upgrade(database) {
    database.createObjectStore('note', {keyPath: 'id'});
  },
});

const NootyIdb = {
  async getAllNotes() {
    return (await dbPromise).getAll('note');
  },

  async putNote(note) {
    if (!note.hasOwnProperty('id')) {
      return;
    }

    return (await dbPromise).put('note', note);
  },

  async deleteNote(id) {
    return (await dbPromise).delete('note', id);
  },
};

export default NootyIdb;
