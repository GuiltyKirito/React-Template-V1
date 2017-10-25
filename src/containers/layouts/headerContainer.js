import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { replace } from 'react-router-redux';
import { logout } from '../../actions/userAction';

const mapStateToProps = state => ({
  name: state.user.name,
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      logout,
      redirect: pathname => replace(pathname),
    },
    dispatch,
  );

export default connect(mapStateToProps, mapDispatchToProps);
