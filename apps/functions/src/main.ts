import * as admin from 'firebase-admin';

admin.initializeApp();

export { onUserCreate, onUserDelete } from './app/users';
