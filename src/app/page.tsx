import Listing from '@/components/listing/listing';
import { JobListings } from './api/jobs/route';
import styles from './page.module.scss';

async function getListings() {
  const res = await fetch(`${process.env.NEXT_PUBLIC_API_URL}/jobs`);
  if (!res.ok) {
    throw new Error('Failed to fetch data');
  }

  return res.json() as Promise<JobListings>;
}

export default async function Home() {
  const jobs = await getListings();

  return (
    <ul className={styles.Listings}>
      {jobs.map((job) => (
        <Listing key={job.id} {...job} />
      ))}
    </ul>
  );
}
