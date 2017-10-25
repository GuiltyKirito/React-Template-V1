import PropTypes from 'prop-types';
import headerContainer from '../../containers/layouts/headerContainer';
import * as redirect from '../../constant/redirect';
import { translate } from 'react-i18next';

import './header.css';

@translate(['header'])
@headerContainer
class Header extends React.Component {
  componentDidMount() {
    this.props.setHeaderHeight(this.refs.header.clientHeight);
  }

  logout() {
    this.props.logout();
    this.props.redirect(redirect.LOGIN);
  }

  render() {
    return (
      <header ref="header" className="main-header">
        <a href={redirect.BASE} className="logo">
          {/* mini logo for sidebar mini 50x50 pixels */}
          <span className="logo-mini">
            <b>logo</b>
          </span>

          {/* logo for regular state and mobile devices */}
          <span className="logo-lg">
            <b>{this.props.t('logo')}</b>
          </span>
        </a>

        <div className="navbar navbar-static-top" role="navigation">
          {/* Sidebar toggle button */}
          <a role="button" className="sidebar-toggle" data-toggle="push-menu">
            <span className="sr-only">{this.props.t('toggle')}</span>
          </a>

          {/* Navbar Right Menu */}
          <div className="navbar-custom-menu">
            <ul className="nav navbar-nav">
              {/* Setting */}
              <li className="dropdown">
                <a role="button" title="setting" className="dropdown-toggle" data-toggle="dropdown">
                  <i className="fa fa-gears" />
                </a>
                <ul className="dropdown-menu" role="menu">
                  <li>
                    <a role="menuitem" styleName="username">
                      <i className="fa fa-2x fa-user-circle-o" />&nbsp;{' '}
                      <span>{this.props.name}</span>
                    </a>
                  </li>
                  <li role="separator" className="divider" styleName="divider" />
                  <li>
                    <a role="button" styleName="dropdown-list" onClick={this.logout.bind(this)}>
                      <i className="fa fa-sign-out" />&nbsp; {this.props.t('logout')}
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </header>
    );
  }
}

Header.propTypes = {
  setHeaderHeight: PropTypes.func,
};

export default Header;
