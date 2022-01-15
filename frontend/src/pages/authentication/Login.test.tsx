import { render, waitFor } from "@testing-library/react";
import { BrowserRouter } from "react-router-dom";
import { useLogin } from "../../hooks/authHooks";
import Login from './Login';

const mockedUsedNavigate = jest.fn();
jest.mock('react-helmet-async');
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('../../hooks/authHooks', () => ({
  useLogin: jest.fn()
}));

describe('<Login />', () => {
  it('Renders without errors', async () => {
    // @ts-ignore
    useLogin.mockImplementationOnce(() => ({}));
    const { getByText, getByTestId } = render(
      <BrowserRouter>
        <Login />
      </BrowserRouter>
    );

    expect(getByText('Sign in')).toBeInTheDocument();
    expect(getByText('Enter your details below.')).toBeInTheDocument();
    expect(getByText("Don’t have an account?")).toBeInTheDocument();
    expect(getByText("Get started")).toBeInTheDocument();
    expect(getByTestId('login-form')).toBeInTheDocument();
  });
})