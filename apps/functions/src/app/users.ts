import * as functions from 'firebase-functions';
import * as admin from 'firebase-admin';
import { FirebasePath } from '@tennis-companion/firebase';

export const onUserCreate = functions.auth.user().onCreate((user) => {
  const now = Date.now();

  admin
    .firestore()
    .collection(FirebasePath.USERS)
    .doc(user.uid)
    .set({
      email: user.email,
      displayName: user.email,
      createdAt: now,
      updatedAt: now,
      profile: {
        userId: user.uid,
        email: user.email,
        createdAt: now,
        updatedAt: now,
      },
    });
});

export const onUserDelete = functions.auth.user().onDelete((user) => {
  const userToRemove = admin.firestore().collection('users').doc(user.uid);

  return userToRemove.delete();
});
