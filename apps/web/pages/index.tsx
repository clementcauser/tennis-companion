import { LinkButton } from '@tennis-companion/uikit';
import Link from 'next/link';
import { Routes } from '../constants/routes.enum';

export function Index() {
  return (
    <div className="container flex justify-center">
      <div className="mx-auto my-8">
        <Link href={Routes.REGISTER} passHref>
          <LinkButton variant="contained">Créer un compte</LinkButton>
        </Link>
      </div>
    </div>
  );
}

export default Index;
