import { Link as RouterLink } from 'react-router-dom';
// material
import { styled } from '@mui/material/styles';
import { Link, Container, Typography } from '@mui/material';

// routes
import { PATH_AUTH } from '../../routes/paths';

// components
import Page from '../../components/Page';
import { RegisterForm } from '../../components/authentication/register';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex'
  }
}));

const ContentStyle = styled('div')(({ theme }) => ({
  maxWidth: 480,
  margin: 'auto',
  display: 'flex',
  minHeight: '100vh',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(12, 0)
}));

export default function Register() {
  return (
    <RootStyle title="Register">
      <Container>
        <ContentStyle>
          <RegisterForm />

          <Typography variant="subtitle2" sx={{ mt: 3, textAlign: 'center' }}>
            Already have an account?
            <Link to={PATH_AUTH.login} component={RouterLink}>
              Login
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
