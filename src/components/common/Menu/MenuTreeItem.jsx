import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import { pure } from 'recompose';

const MenuTreeItem = props => {
  return (
    <li>
      <Link to={props.to}>
        {props.children}
      </Link>
    </li>
  );
};

MenuTreeItem.propTypes = {
  to: PropTypes.oneOfType([PropTypes.string, PropTypes.object]).isRequired,
};

export default pure(MenuTreeItem);
