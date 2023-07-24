import { openDB } from 'idb';

const initdb = async () =>
  openDB('jate', 1, {
    upgrade(db) {
      if (db.objectStoreNames.contains('jate')) {
        console.log('jate database already exists');
        return;
      }
      db.createObjectStore('jate', { keyPath: 'id', autoIncrement: true });
      console.log('jate database created');
    },
  });

// TODO: Add logic to a method that accepts some content and adds it to the database
export const putDb = async (content) => {;
  try {
    const contactDb = await openDB('jate, 1');
    const tx = contactDb.transaction('jate', 'readwrite');
    const store = tx.objectStore('jate');
    await store.add ({ content });
  } catch (error) {
    console.error('Error in Adding Content to the DB', error);
  }
};

// TODO: Add logic for a method that gets all the content from the database
export const getDb = async () => {
  try {
    const db = await openDB('jate', 1);
    const tx = db.transaction('jate', 'readonly');
    const store = tx.objectStore('jate');

    const allContent = await store.getAll(); // Retreives all acontent
    return allContent;
  } catch (error) {
    console.error('Error retrieving content from the database:', error);
    return [];
  }
};
initdb();
