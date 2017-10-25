import Menu from '../common/Menu';
import { translate } from 'react-i18next';
import sidebarContainer from '../../containers/layouts/sidebarContainer';

@translate(['sidebar'])
@sidebarContainer
class Sidebar extends React.Component {
  render() {
    return (
      <aside className="main-sidebar">
        <section className="sidebar">
          <Menu defaultActive={this.props.defaultActive}>
            {/* 首頁 */}
            <Menu.Header>{this.props.t('index')}</Menu.Header>

            {/* Home */}
            <Menu.Item to="/" index="home" icon="file-text-o">{this.props.t('home')}</Menu.Item>

          </Menu>
        </section>
      </aside>
    );
  }
}

export default Sidebar;
