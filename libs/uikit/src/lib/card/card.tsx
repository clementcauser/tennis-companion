import { PropsWithChildren } from 'react';
import { CardProps } from './card.types';

const Card = ({ children, title }: PropsWithChildren<CardProps>) => (
  <article
    data-testid="card"
    className="block p-6 rounded-lg shadow-lg bg-white max-w-sm"
  >
    {title && typeof title === 'string' ? (
      <h5 className="text-gray-900 text-xl leading-tight font-medium mb-2">
        {title}
      </h5>
    ) : (
      title
    )}
    <div className="mt-4">{children}</div>
  </article>
);

export default Card;
