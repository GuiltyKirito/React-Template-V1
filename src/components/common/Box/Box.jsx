import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pure } from 'recompose';

const Box = props => {
  return (
    <div className={classNames('box', `box-${props.color}`)}>
      {props.children}
    </div>
  );
};

Box.defaultProps = {
  color: 'default',
};

Box.propTypes = {
  color: PropTypes.string,
};

export default pure(Box);
