'use client'
import { User } from '@/app/lib/types';
import UserCard from '../UserCard/UserCard';
import styles from './UserList.module.scss';
import { usePreferences } from '@/app/contexts/PreferencesContext';

export default function UserList({ users }: { users: User[] }) {
  const { preferences } = usePreferences();

  return (
    <div className={`${styles.container} ${styles[preferences.layout]}`}>
      {users
        .slice(0, preferences.itemsPerPage)
        .map((user) => (
          <UserCard key={user.id} user={user} />
        ))}
    </div>
  );
}