import PropTypes from 'prop-types';
import classNames from 'classnames';

class MenuTree extends React.Component {
  active() {
    return this.props.index === this.context.activeIndex;
  }

  render() {
    return (
      <li className={classNames('treeview', { 'active': this.active(), 'menu-open': this.active() })}>

        <a role="button" onClick={() => this.context.handleClick(this.props.index)}>
          <i className={classNames('fa', 'fa-lg', `fa-${this.props.icon}`)} />&nbsp;{' '}
          <span>{this.props.title}</span>
          <span className="pull-right-container">
            <i className="fa fa-angle-left pull-right" />
          </span>
        </a>

        <ul className={classNames('treeview-menu', { 'menu-open': this.active() })} >
          {this.props.children}
        </ul>
      </li>
    );
  }
}

MenuTree.propTypes = {
  icon: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
};

MenuTree.contextTypes = {
  activeIndex: PropTypes.string,
  handleClick: PropTypes.func,
};

export default MenuTree;
