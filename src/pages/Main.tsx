import { useState } from 'react';
import Chats from './Chats';
import User from '../models/user';

type Tab = 'Chats' | 'People' | 'Discover';

export default function Main({ user }: { user: User }) {
  const [selectedTab] = useState<Tab>('Chats');

  switch (selectedTab) {
    case 'Chats':
      return <Chats user={user} />;
    case 'People':
      return <div />;
    case 'Discover':
      return <div />;
  }
}
