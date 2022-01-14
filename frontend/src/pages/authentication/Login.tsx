import { Link as RouterLink, useNavigate } from 'react-router-dom';

// material
import { styled } from '@mui/material/styles';
import { Box, Card, Stack, Link, Container, Typography } from '@mui/material';

// routes
import { PATH_AUTH, PATH_APP } from '../../routes/paths';

// components
import Page from '../../components/Page';
import { LoginForm } from '../../components/authentication/login';
import { useLogin } from '../../hooks/authHooks';
import { useEffect } from 'react';

const RootStyle = styled(Page)(({ theme }) => ({
  [theme.breakpoints.up('md')]: {
    display: 'flex',
    flexDirection: 'column'
  }
}));

const SectionStyle = styled(Card)(({ theme }) => ({
  width: '100%',
  maxWidth: 464,
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  margin: theme.spacing(2, 0, 2, 2)
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

export default function Login() {
  const { mutate, isLoading, isSuccess } = useLogin();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(PATH_APP.root);
    }
  }, [isSuccess, isLoading, mutate, navigate]);

  return (
    <RootStyle title="Login">
      <Container maxWidth="sm">
        <ContentStyle>
          <Stack direction="column" alignItems="center" sx={{ mb: 5 }}>
            <Box sx={{ flexGrow: 1 }}>
              <Typography variant="h4" gutterBottom>
                Sign in
              </Typography>
              <Typography sx={{ color: 'text.secondary' }}>Enter your details below.</Typography>
            </Box>
          </Stack>

          <LoginForm
            onSubmit={(email, password) => {
              mutate({ email, password });
            }}
            isLoading={isLoading}
          />

          <Typography variant="body2" align="center" sx={{ mt: 3 }}>
            Don’t have an account?&nbsp;
            <Link variant="subtitle2" component={RouterLink} to={PATH_AUTH.register}>
              Get started
            </Link>
          </Typography>
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
