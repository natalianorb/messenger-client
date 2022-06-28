import Typography from '@mui/material/Typography';
import Toolbar from '@mui/material/Toolbar';
import Avatar from '@mui/material/Avatar';
import { AvatarInfo } from '../models/avatar-info';

export default function Topbar({ avatarInfo, title } : { avatarInfo: AvatarInfo, title: string }) {
  const { altText, imgSrc } = avatarInfo;
  return (
    <div>
      <Toolbar>
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
          { title }
        </Typography>
      </Toolbar>
    </div>
  );
}
