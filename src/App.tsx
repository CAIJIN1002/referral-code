import Container from '@mui/material/Container';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardMedia from '@mui/material/CardMedia';
import Typography from '@mui/material/Typography';
import Chip from '@mui/material/Chip';
import LanguageIcon from '@mui/icons-material/Language';
import ShareIcon from '@mui/icons-material/Share';
import items from './assets/data'

interface Item {
  logo: string;
  link: string;
  code: string;
  type: string;
}

function App() {
  const handleLinkClick = ({ code } : Item) => {
    navigator.clipboard.writeText(code);
		window.alert("已複製推薦碼到剪貼簿");
  }
  const handleShareClick = ({ link } : Item) => {
    navigator.clipboard.writeText(link);
		window.alert("已複製連結到剪貼簿");
  }
  const handleBrowserClick = ({ link } : Item) => {
    window.open(link)
  }

  return (
    <Container maxWidth="sm" sx={{ paddingY: 4, paddingX: 4 }}>
      <Typography variant="h5" component="h1" gutterBottom>
        Welcome! Looking for some referral code?
      </Typography>
      <Typography paragraph component="p" sx={{ color: '#8b8b8b' }}>
        Here have anything what you want!
      </Typography>

      {items.map((item, index) =>
        <Card sx={{ display: 'flex', marginBottom: 4 }} key={index}>
          <Box sx={{ width: '100%' }}>
            <CardContent sx={{ display: 'inline-flex', flexDirection: 'column', flex: '1 0 auto' }}>
              <Typography variant="h6" component="h6" gutterBottom>{item.brand}</Typography>
              {item.code && <Chip label={item.code} variant="outlined" onClick={() => handleLinkClick(item)} />}
              <Box sx={{ marginTop: 2 }}>
                <LanguageIcon onClick={() => handleBrowserClick(item)} />
                <ShareIcon sx={{ marginLeft: 1 }} onClick={() => handleShareClick(item)} />
              </Box>
            </CardContent>
          </Box>
          <CardMedia
            component="img"
            sx={{ width: 156, height: 156 }}
            image={item.logo}
            alt={item.brand}
          />
        </Card>
      )}
    </Container>
  );
}

export default App;
