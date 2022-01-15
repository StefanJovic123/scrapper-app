import { render, waitFor } from '@testing-library/react';
import Article from './Article';

const mockPropsData = {
  title: 'Test Article',
  img: 'http://img.png',
  description: 'Test description'
};

describe('<Article />', () => {
  it('Renders without errors', async () => {
    const { getByText, getByTestId } = render(<Article {...mockPropsData} />);

    expect(getByText(mockPropsData.title)).toBeInTheDocument();
    expect(getByText(mockPropsData.description)).toBeInTheDocument();
  });
});
