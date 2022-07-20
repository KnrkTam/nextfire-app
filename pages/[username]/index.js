import { UserContext } from '../../lib/context';
import { useContext } from 'react';

export default function UserProfilePage({ }) {

  const { user, username } = useContext(UserContext);
  console.log(user?.displayName);
    return (
      <main>
        {username}'s Page
      </main>
    )
  }