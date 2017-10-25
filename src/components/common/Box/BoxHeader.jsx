import PropTypes from 'prop-types';
import classNames from 'classnames';
import { pure } from 'recompose';

const BoxHeader = props => {
  return (
    <div className={classNames('box-header', { 'with-border': props.border })}>
      {props.children}
    </div>
  );
};

BoxHeader.defaultProps = {
  border: true,
};

BoxHeader.propTypes = {
  border: PropTypes.bool,
};

export default pure(BoxHeader);
