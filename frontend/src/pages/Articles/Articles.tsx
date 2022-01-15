import { Container, Skeleton } from '@mui/material';
import { useNavigate } from 'react-router-dom';
import Article from '../../components/Article';
import { useArticles } from '../../hooks/articlesHooks';
import { PATH_APP } from '../../routes/paths';

export default function Articles() {
  const navigate = useNavigate();
  const { data, isLoading } = useArticles();

  const goToArticle = (id: string) => {
    navigate(PATH_APP.article(id));
  };

  return (
    <Container maxWidth="md">
      {isLoading && (
        <Skeleton
          data-testid="skeleton-loader"
          variant="rectangular"
          width="100%"
          sx={{ height: 200, borderRadius: 2, mt: 4 }}
        />
      )}

      {data?.map((item, index) => (
        <Article
          data-testid="single-article"
          key={index}
          title={item.title}
          img={item.imageUrl}
          onClick={() => goToArticle(item.id)}
        />
      ))}
    </Container>
  );
}
