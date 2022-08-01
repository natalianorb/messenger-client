import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { AvatarInfo } from '../models/avatar-info';
import './Topbar.css';

export interface Button {
  id: string;
  jsx: any;
}

interface TopBarProps {
  avatarInfo: AvatarInfo,
  title: string,
  buttons: Button[]
}

export default function TopBar({
  avatarInfo,
  title,
  buttons,
}: TopBarProps) {
  const {
    altText,
    imgSrc,
  } = avatarInfo;
  return (
    <Toolbar className="top-bar">
      <Avatar alt={altText} src={imgSrc} />
      <Typography
        variant="h5"
        component="div"
        sx={{
          flexGrow: 1,
          m: '0 12px',
          fontWeight: 700,
          color: '#000',
        }}
      >
        {title}
      </Typography>
      <ul className="top-bar__buttons">
        {buttons.map((btn) => <li key={btn.id}>{btn.jsx}</li>)}
      </ul>
    </Toolbar>
  );
}
