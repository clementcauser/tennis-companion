import { PropsWithChildren } from 'react';

const AuthLayout = ({ children }: PropsWithChildren) => (
  <div className="container m-auto p-3 min-h-screen">
    <div className="md:max-w-xl m-auto">
      <h1 className="text-3xl mb-5 mt-5 ">
        Bienvenue sur{' '}
        <span className="block font-black text-3xl text-primary-base">
          Tennis Companion
        </span>
      </h1>
      {children}
    </div>
  </div>
);

export default AuthLayout;
