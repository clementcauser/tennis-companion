import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';

export const onUserCreate = functions.auth.user().onCreate((user) => {
  admin.firestore().collection('users').doc(user.uid).set({
    email: user.email,
    displayName: user.email,
    createdAt: Date.now(),
    updatedAt: Date.now(),
  });
});

export const onUserDelete = functions.auth.user().onDelete((user) => {
  const userToRemove = admin.firestore().collection('users').doc(user.uid);

  return userToRemove.delete();
});
