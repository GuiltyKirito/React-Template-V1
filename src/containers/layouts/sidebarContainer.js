import { connect } from 'react-redux';

const mapStateToProps = state => ({
  defaultActive: state.sidebar.defaultActive,
});

export default connect(
  mapStateToProps,
);
