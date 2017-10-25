import PropTypes from 'prop-types';

class Menu extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      activeIndex: props.defaultActive,
    };
  }

  getChildContext() {
    return {
      activeIndex: this.state.activeIndex,
      handleClick: this.handleClick.bind(this),
    };
  }

  handleClick(index) {
    this.setState({ activeIndex: index });
  }

  componentWillReceiveProps(nextProps) {
    if (nextProps.defaultActive !== this.props.defaultActive) {
      this.setState({ activeIndex: nextProps.defaultActive });
    }
  }

  render() {
    return (
      <ul className="sidebar-menu" data-widget="tree">
        {this.props.children}
      </ul>
    );
  }
}

Menu.propTypes = {
  defaultActive: PropTypes.string,
};

Menu.childContextTypes = {
  activeIndex: PropTypes.string,
  handleClick: PropTypes.func,
};

export default Menu;
