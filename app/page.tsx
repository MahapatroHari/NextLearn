import Header from './components/Header/Header';
import UserList from './components/UserList/UserList';
import { User } from './lib/types';

async function getUsers() {
  const res = await fetch('https://jsonplaceholder.typicode.com/users', {
    next: { revalidate: 3600 }
  });

  if (!res.ok) {
    throw new Error('Failed to fetch users');
  }

  return res.json();
}

export default async function Home() {
  const users: User[] = await getUsers();

  return (
    <main>
      <Header />
      <UserList users={users} />
    </main>
  );
}