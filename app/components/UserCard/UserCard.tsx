import { User } from '@/app/lib/types';
import Link from 'next/link';
import styles from './UserCard.module.scss';

export default function UserCard({ user }: { user: User }) {
  return (
    <Link href={`/users/${user.id}`} className={styles.card}>
      <h2>{user.name}</h2>
      <p className={styles.username}>@{user.username}</p>
      <div className={styles.details}>
        <p>{user.email}</p>
        <p>{user.company.name}</p>
      </div>
    </Link>
  );
}