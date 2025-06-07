import { PageCentering, PageContent } from '../_components/pageContent';

export default function Fun() {
  return (
    <PageContent>
      <PageCentering>
        <div className='text-center'>
          <h1 className="text-4xl font-bold mb-4">Fun Page (Coming Soon)</h1>
          <p className="text-lg">This is a fun page!</p>
        </div>
      </PageCentering>
    </PageContent>
  );
}