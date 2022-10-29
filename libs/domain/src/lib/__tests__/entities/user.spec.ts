import { IUserData, User } from '../../entities';

const fakeUserData: IUserData = {
  id: 'id',
  username: 'john',
  email: 'john@doe.com',
  password: 'johndoe',
  createdAt: 4892374927,
  updatedAt: 4892374927,
};

describe('User entity', () => {
  const userInstance = new User(fakeUserData);

  it('should exist', () => {
    expect(userInstance).toBeInstanceOf(User);
  });

  it('should contain user data', () => {
    expect(userInstance.id).toBe(fakeUserData.id);
    expect(userInstance.password).toBe(fakeUserData.password);
    expect(userInstance.data.id).toBe(fakeUserData.id);
    expect(userInstance.data.username).toBe(fakeUserData.username);
    expect(userInstance.data.email).toBe(fakeUserData.email);
  });
});
