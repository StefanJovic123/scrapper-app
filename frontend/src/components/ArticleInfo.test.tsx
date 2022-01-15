import { render, waitFor } from "@testing-library/react";
import ArticleInfo from "./ArticleInfo";

const mockPropsData = {
  title: 'Test Title',
  paragraphs: [
    'Paragraph1',
    'Paragraph2'
  ],
  subtitle: "test Subtitle"
}

describe('<ArticleInfo />', () => {
  it('Renders without errors', async () => {
    const { getByText } = render(
      <ArticleInfo {...mockPropsData} />
    );

    expect(getByText(mockPropsData.title)).toBeInTheDocument();
    expect(getByText(mockPropsData.paragraphs[0])).toBeInTheDocument();
    expect(getByText(mockPropsData.paragraphs[1])).toBeInTheDocument();
    expect(getByText(mockPropsData.subtitle)).toBeInTheDocument();
  });
})