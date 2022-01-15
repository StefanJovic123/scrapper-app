import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import ArticleDetails from './ArticleDetails';
import { mockArticle } from '../../mocks/db';
import { useArticleById } from '../../hooks/articlesHooks';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('../../hooks/articlesHooks', () => ({
  useArticleById: jest.fn()
}));

describe('<AticleDetails />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders without crashing', () => {
    // @ts-ignore
    useArticleById.mockImplementationOnce(() => ({ isLoading: true, data: null }));
    render(<ArticleDetails />);
  });

  it('Renders loading component only', async () => {
    // @ts-ignore
    useArticleById.mockImplementationOnce(() => ({ isLoading: true, data: null }));
    const { getByTestId } = render(<ArticleDetails />);

    const element = getByTestId('skeleton-loader');
    expect(element).toBeVisible();
  });

  it('Render article content', async () => {
    // @ts-ignore
    useArticleById.mockImplementationOnce(() => ({ isLoading: false, data: mockArticle }));
    const { getByText } = render(<ArticleDetails />);

    expect(getByText(`${mockArticle.title}`)).toBeInTheDocument();
  });
});
