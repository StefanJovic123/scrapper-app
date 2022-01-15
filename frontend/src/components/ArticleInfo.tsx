import { styled } from '@mui/material/styles';
import { Typography, Box, BoxProps, Card } from '@mui/material';

const RootStyle = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(8, 2)
}));

interface ArticleInfoProps extends BoxProps {
  title?: string;
  subtitle?: string;
  img?: string;
  paragraphs?: string[];
}

export default function ArticleInfo({
  title,
  paragraphs,
  img,
  subtitle,
  ...other
}: ArticleInfoProps) {
  return (
    <Card sx={{ mb: 3 }} data-testid="article-info">
      <RootStyle {...other}>
        <Typography variant="h3" gutterBottom>
          {title}
        </Typography>

        <Typography variant="h5" gutterBottom>
          {subtitle}
        </Typography>

        <Box
          component="img"
          alt="article-cover-image"
          src={img || '/static/illustrations/illustration_empty_content.svg'}
          sx={{ width: '100%', height: 340, mb: 3, objectFit: 'cover' }}
        />

        <Box sx={{ display: 'flex', flexDirection: 'column' }}>
          {paragraphs?.map((paragprah, index) => (
            <Typography key={index} variant="body2" sx={{ color: 'text.secondary', mb: 2 }}>
              {paragprah}
            </Typography>
          ))}
        </Box>
      </RootStyle>
    </Card>
  );
}
