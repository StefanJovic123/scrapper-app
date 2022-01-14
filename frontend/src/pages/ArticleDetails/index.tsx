import { Container, Skeleton } from '@mui/material';
import { useNavigate, useParams } from 'react-router-dom';
import ArticleInfo from '../../components/ArticleInfo';
import { useArticleById } from '../../hooks/articlesHooks';
import { PATH_APP } from '../../routes/paths';

export default function ArticleDetails() {
  const navigate = useNavigate();
  const params = useParams<{ id: string }>();
  const { data: article, isLoading } = useArticleById(Number(params.id));

  const goToArticle = (id: string | undefined) => {
    if (id) {
      navigate(PATH_APP.article(id));
    }
  };

  return (
    <Container maxWidth="lg">
      {isLoading && (
        <Skeleton variant="rectangular" width="100%" sx={{ height: 200, borderRadius: 2, mt: 4 }} />
      )}

      {!isLoading && (
        <ArticleInfo
          title={article?.title}
          img={article?.imageUrl}
          paragraphs={article?.paragraphs}
          onClick={() => goToArticle(article?.id)}
        />
      )}
    </Container>
  );
}
