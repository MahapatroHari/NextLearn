import { User } from '@/app/lib/types';
import Link from 'next/link';
import styles from './page.module.scss';

async function getUser(id: string) {
  const res = await fetch(`https://jsonplaceholder.typicode.com/users/${id}`, {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch user');
  }

  return res.json();
}

export default async function UserPage({
  params: { id },
}: {
  params: { id: string };
}) {
  const user: User = await getUser(id);

  return (
    <div className={styles.container}>
      <Link href="/" className={styles.backLink}>
        ← Back to Users
      </Link>
      
      <div className={styles.card}>
        <h1>{user.name}</h1>
        <p className={styles.username}>@{user.username}</p>

        <div className={styles.section}>
          <h2>Contact Information</h2>
          <p>Email: {user.email}</p>
          <p>Phone: {user.phone}</p>
          <p>Website: {user.website}</p>
        </div>

        <div className={styles.section}>
          <h2>Company</h2>
          <p>Name: {user.company.name}</p>
          <p>Catch Phrase: {user.company.catchPhrase}</p>
        </div>

        <div className={styles.section}>
          <h2>Address</h2>
          <p>{user.address.street}, {user.address.suite}</p>
          <p>{user.address.city}, {user.address.zipcode}</p>
        </div>
      </div>
    </div>
  );
}