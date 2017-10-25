/**
 * Global CSS
 */
import 'sanitize.css/sanitize.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import 'admin-lte/dist/css/AdminLTE.css';
import 'admin-lte/dist/css/skins/skin-blue.min.css';
import 'font-awesome/css/font-awesome.min.css';
import 'element-theme-default';
import './index.css';

/**
 * Global JS
 */
import 'bootstrap/dist/js/bootstrap.min';
import 'admin-lte/dist/js/adminlte.min';

/**
 * React 相關
 */
import { render } from 'react-dom';
import { Provider } from 'react-redux';
import { renderRoutes } from 'react-router-config';
import { ConnectedRouter } from 'react-router-redux';
import { I18nextProvider } from 'react-i18next';

import registerServiceWorker from './registerServiceWorker';

import i18n from './i18n';
import routes from './routes';
import stores, { history } from './stores';

i18n.changeLanguage('zh-TW');

const Index = () => (
  <Provider store={stores}>
    <I18nextProvider i18n={i18n}>
      <ConnectedRouter history={history}>
        <div>
          {renderRoutes(routes)}
        </div>
      </ConnectedRouter>
    </I18nextProvider>
  </Provider>
);

render(<Index />, document.getElementById('root'));
registerServiceWorker();
