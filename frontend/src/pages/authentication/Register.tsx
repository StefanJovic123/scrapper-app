import { useNavigate } from 'react-router-dom';

// material
import { styled } from '@mui/material/styles';
import { Container } from '@mui/material';

// components
import Page from '../../components/Page';
import { RegisterForm } from '../../components/authentication/register';
import { useRegister } from '../../hooks/authHooks';
import { useEffect } from 'react';
import { PATH_APP } from '../../routes/paths';

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
  const { mutate, isLoading, isSuccess } = useRegister();
  const navigate = useNavigate();

  useEffect(() => {
    if (isSuccess) {
      navigate(PATH_APP.root);
    }
  }, [mutate, isLoading, navigate, isSuccess]);

  return (
    <RootStyle title="Register">
      <Container>
        <ContentStyle>
          <RegisterForm
            isLoading={isLoading}
            onSubmit={(values) => {
              mutate(values);
            }}
          />
        </ContentStyle>
      </Container>
    </RootStyle>
  );
}
