import { Container } from '@mui/material';
import Topbar from '../components/Topbar';
import { AvatarInfo } from '../models/avatar-info';
import User from '../models/user';

export default function Main({ user }: { user: User }) {
  const avatarInfo: AvatarInfo = {
    altText: user.name,
    imgSrc: '',
  };
  return (
    <div>
      <Topbar avatarInfo={avatarInfo} title="Chats" />
      <Container component="main"> main content</Container>
    </div>
  );
}
