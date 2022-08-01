import { Container } from '@mui/material';
import { ChangeEvent, useCallback, useId } from 'react';
import TopBar, { Button } from '../components/TopBar';
import StoryLink from '../components/StoryLink';
import { AvatarInfo } from '../models/avatar-info';
import User from '../models/user';
import './Chats.css';
import SearchInput from '../components/SearchInput';

export default function Chats({ user }: { user: User }) {
  const avatarInfo: AvatarInfo = {
    altText: user.name || 'user name',
    imgSrc: user.avatarUrls.defaultUrl,
  };
  const buttons: Button[] = [{
    id: useId(),
    jsx: <button type="button" className="chats__new-msg" aria-label="new message" />,
  }];
  const onChange = useCallback((event: ChangeEvent<HTMLInputElement>) => {
    const text = event.target.value;
    console.log(text);
  }, []);

  return (
    <div className="chats">
      <TopBar avatarInfo={avatarInfo} title="Chats" buttons={buttons} />
      <div className="chats__search">
        <SearchInput onChange={onChange} />
      </div>
      <Container component="main">
        <StoryLink avatarInfo={avatarInfo} url="1" />
      </Container>
    </div>
  );
}
