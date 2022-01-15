import { Container, Grid, Paper, Skeleton } from '@mui/material';
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
    <Container maxWidth="lg">
      {isLoading && (
        <Skeleton
          data-testid="skeleton-loader"
          variant="rectangular"
          width="100%"
          sx={{ height: 200, borderRadius: 2 }}
        />
      )}

      <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {data?.map((item, index) => (
          <Grid item xs={2} sm={4} md={4} key={index}>
            <Paper
              sx={{
                height: '100%',
                boxShadow: (theme) => theme.customShadows.z8
              }}
            >
              <Article
                data-testid="single-article"
                key={index}
                title={item.title}
                img={item.imageUrl}
                onClick={() => goToArticle(item.id)}
              />
            </Paper>
          </Grid>
        ))}
      </Grid>
    </Container>
  );
}
