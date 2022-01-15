import 'react-toastify/dist/ReactToastify.css';

import axios from 'axios';

// routes
import Router from './routes';
import { BrowserRouter } from 'react-router-dom';

// theme
import ThemeConfig from './theme';
import GlobalStyles from './theme/globalStyles';

// components
import ThemePrimaryColor from './components/ThemePrimaryColor';
import ThemeLocalization from './components/ThemeLocalization';

import { ToastContainerWrapper } from './services/notification';

axios.defaults.headers.common['Content-Type'] = 'application/json';
axios.defaults.headers.common.Accept = 'application/json, text/plain, */*';

export default function App() {
  return (
    <BrowserRouter>
      <ThemeConfig>
        <ThemePrimaryColor>
          <ThemeLocalization>
            <GlobalStyles />
            <Router />
            <ToastContainerWrapper />
          </ThemeLocalization>
        </ThemePrimaryColor>
      </ThemeConfig>
    </BrowserRouter>
  );
}
