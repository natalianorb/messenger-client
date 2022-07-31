import { Container } from '@mui/material';
import { useId } from 'react';
import TopBar, { Button } from '../components/TopBar';
import StoryLink from '../components/StoryLink';
import { AvatarInfo } from '../models/avatar-info';
import User from '../models/user';
import './Chats.css';

export default function Chats({ user }: { user: User }) {
  const avatarInfo: AvatarInfo = {
    altText: user.name || 'user name',
    imgSrc: user.avatarUrls.defaultUrl,
  };
  const buttons: Button[] = [{
    id: useId(),
    jsx: <button type="button" className="chats__new-msg" aria-label="new message" />,
  }];

  return (
    <div>
      <TopBar avatarInfo={avatarInfo} title="Chats" buttons={buttons} />
      <Container component="main">
        <StoryLink avatarInfo={avatarInfo} url="1" />
      </Container>
    </div>
  );
}
