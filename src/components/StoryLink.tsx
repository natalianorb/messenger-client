import {
  Link,
} from 'react-router-dom';
import Avatar from '@mui/material/Avatar';
import { AvatarInfo } from '../models/avatar-info';

export default function StoryLink({ avatarInfo, url } : { avatarInfo: AvatarInfo, url: string }) {
  const { altText, imgSrc } = avatarInfo;

  return (
    <Link to={`/story/${url}`}>
      <Avatar alt={altText} src={imgSrc} />
      it&apos;s a link to story
    </Link>
  );
}
