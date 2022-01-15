import { styled } from '@mui/material/styles';
import { Typography, Box, BoxProps, Card } from '@mui/material';

const RootStyle = styled(Box)(({ theme }) => ({
  height: '100%',
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  padding: theme.spacing(4, 2),
  '&:hover': { opacity: 0.8, cursor: 'pointer' }
}));

interface ArticleProps extends BoxProps {
  title?: string;
  img?: string;
  description?: string;
}

export default function Article({ title, description, img, ...other }: ArticleProps) {
  return (
    <Card sx={{ mb: 3 }}>
      <RootStyle {...other}>
        <Box
          component="img"
          alt="empty content"
          src={img || '/static/illustrations/illustration_empty_content.svg'}
          sx={{ width: '100%', height: 340, mb: 3, objectFit: 'cover' }}
        />

        <Typography variant="h5" gutterBottom>
          {title}
        </Typography>

        {description && (
          <Typography variant="body2" sx={{ color: 'text.secondary' }}>
            {description}
          </Typography>
        )}
      </RootStyle>
    </Card>
  );
}
