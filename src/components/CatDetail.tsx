import { ArrowLeft } from 'lucide-react';
import { CatCard } from './CatCard';

type CatDetailProps = {
  id: string;
};

export function CatDetail({ id }: CatDetailProps) {
  return (
    <div className="mr-auto ml-auto max-w-200">
      <a href="/#" className="inline-flex text-blue-500 underline underline-offset-4">
        <ArrowLeft /> &nbsp;Back to catalog
      </a>
      <div className="mt-5">
        <CatCard id={id} url={`https://cataas.com/cat/${id}`} />
      </div>
    </div>
  );
}
