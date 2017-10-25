import PropTypes from 'prop-types';
import classNames from 'classnames';
import { Link } from 'react-router-dom';

class MenuItem extends React.Component {
  active() {
    return this.props.index === this.context.activeIndex;
  }

  handleClick() {
    this.context.handleClick(this.props.index);

    $('.treeview-menu').slideUp($.AdminLTE.options.animationSpeed);
  }

  render() {
    return (
      <li className={classNames({ active: this.active() })}>
        <Link to={this.props.to} onClick={this.handleClick.bind(this)}>
          <i className={classNames('fa', 'fa-lg', `fa-${this.props.icon}`)} />&nbsp;{' '}
          <span>{this.props.children}</span>
        </Link>
      </li>
    );
  }
}

MenuItem.propTypes = {
  icon: PropTypes.string.isRequired,
  index: PropTypes.string.isRequired,
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

MenuItem.contextTypes = {
  activeIndex: PropTypes.string,
  handleClick: PropTypes.func,
};

export default MenuItem;
