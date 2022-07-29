import { Container } from '@mui/material';
import Topbar from '../components/Topbar';
import StoryLink from '../components/StoryLink';
import { AvatarInfo } from '../models/avatar-info';
import User from '../models/user';

export default function Chats({ user }: { user: User }) {
  const avatarInfo: AvatarInfo = {
    altText: user.name || 'user name',
    imgSrc: user.avatarUrls.defaultUrl,
  };

  return (
    <div>
      <Topbar avatarInfo={avatarInfo} title="Chats" />
      <Container component="main">
        <StoryLink avatarInfo={avatarInfo} url="1" />
      </Container>
    </div>
  );
}
