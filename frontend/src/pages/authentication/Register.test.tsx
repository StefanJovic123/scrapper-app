import { render } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { useRegister } from '../../hooks/authHooks';
import Register from './Register';

const mockedUsedNavigate = jest.fn();
jest.mock('react-helmet-async');
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('../../hooks/authHooks', () => ({
  useRegister: jest.fn()
}));

describe('<Register />', () => {
  it('Renders without errors', async () => {
    // @ts-ignore
    useRegister.mockImplementationOnce(() => ({}));
    const { getAllByText } = render(
      <BrowserRouter>
        <Register />
      </BrowserRouter>
    );

    expect(getAllByText('Already have an account?')[0]).toBeInTheDocument();
    expect(getAllByText('Login')[0]).toBeInTheDocument();
  });
});
