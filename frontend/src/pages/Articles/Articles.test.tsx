import { fireEvent, getByTestId, render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { MemoryRouter } from 'react-router-dom';
import Articles from './Articles';
import { mockArticles } from '../../mocks/db';
import { useArticles } from '../../hooks/articlesHooks';

const mockedUsedNavigate = jest.fn();
jest.mock('react-router-dom', () => ({
  ...(jest.requireActual('react-router-dom') as any),
  useNavigate: () => mockedUsedNavigate
}));

jest.mock('../../hooks/articlesHooks', () => ({
  useArticles: jest.fn()
}));

describe('<Articles />', () => {
  afterEach(() => {
    jest.clearAllMocks();
  });

  it('Renders without crashing', () => {
    // @ts-ignore
    useArticles.mockImplementationOnce(() => ({ isLoading: true, data: null }));
    render(<Articles />);
  });

  it('Renders loading component only', async () => {
    // @ts-ignore
    useArticles.mockImplementationOnce(() => ({ isLoading: true, data: null }));
    const { getByTestId } = render(<Articles />);

    const element = getByTestId('skeleton-loader');
    expect(element).toBeVisible();
  });

  it('Renders list of articles', async () => {
    // @ts-ignore
    useArticles.mockImplementationOnce(() => ({ isLoading: false, data: mockArticles }));
    const { getByText, getAllByTestId } = render(<Articles />);

    expect(getByText(`${mockArticles[0].title}`)).toBeInTheDocument();
    expect(getAllByTestId('single-article').length).toEqual(mockArticles.length);
  });

  // it('Should navigate to Article info page on click', async () => {
  //   // @ts-ignore
  //   useArticles.mockImplementationOnce(() => ({ isLoading: false, data: mockArticles }));
  //   const { getByText, getAllByTestId } = render(
  //     <MemoryRouter>
  //       <Articles />
  //     </MemoryRouter>
  //   );

  //   // userEvent.click(screen.getAllByTestId('single-article')[0], { button: 0 });
  //   // await waitFor(() => {
  //   //   expect(screen.getByTestId('article-info')).toBeInTheDocument();
  //   // });
  // });
});
