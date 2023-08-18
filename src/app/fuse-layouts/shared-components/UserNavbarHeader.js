import AppBar from '@material-ui/core/AppBar';
import Avatar from '@material-ui/core/Avatar';
import { makeStyles } from '@material-ui/core/styles';
import Typography from '@material-ui/core/Typography';
import clsx from 'clsx';
import { useSelector } from 'react-redux';

import defaultUser from '@assets/images/avatars/profile.jpg';

const useStyles = makeStyles((theme) => ({
  root: {
    '&.user': {
      '& .username, & .email': {
        transition: theme.transitions.create('display', {
          duration: theme.transitions.duration.shortest,
          easing: theme.transitions.easing.easeInOut,
        }),
      },
    },
  },
  avatar: {
    background: theme.palette.background.default,
    transition: theme.transitions.create('all', {
      duration: theme.transitions.duration.shortest,
      easing: theme.transitions.easing.easeInOut,
    }),
    bottom: 0,
    '& > img': {
      borderRadius: '50%',
    },
  },
}));

function UserNavbarHeader(props) {
  const user = useSelector(({ auth }) => auth.user);
  const config = useSelector(({ fuse }) => fuse.settings.current.layout.config);
  const navbar = useSelector(({ fuse }) => fuse.navbar);
  const { folded } = config.navbar;
  const foldedAndClosed = folded && !navbar.foldedOpen;
  const foldedAndOpened = folded && navbar.foldedOpen;

  const classes = useStyles();

  return (
    <AppBar
      position="static"
      color="primary"
      classes={{ root: classes.root }}
      className="user relative flex flex-col items-center justify-center pt-0 pt-24 pb-64 mb-32 z-0 shadow-0"
    >
      <Typography className="username text-18 whitespace-nowrap font-semibold mb-4" color="inherit">
        {user.username}
      </Typography>
      <Typography
        className="email text-13 opacity-50 whitespace-nowrap font-medium"
        color="inherit"
      >
        {user.email}
      </Typography>
      <div className={`flex items-center justify-center bottom-0 ${foldedAndOpened || !folded ? 'absolute -mb-44' : '' }`}>
        <Avatar
          className={clsx(classes.avatar, `avatar w-72 h-72 p-8 box-content ${foldedAndOpened || !folded ? 'bottom-0' : ''}`)}
          alt="user photo"
          src={
            user.photoURL && user.photoURL !== ''
              ? user.photoURL
              : defaultUser
          }
        />
      </div>
    </AppBar>
  );
}

export default UserNavbarHeader;
