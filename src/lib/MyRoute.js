import { Route } from 'react-router-dom';
import { types } from '../actions/sidebarAction';
import stores from '../stores';

class MyRoute extends Route {
  componentDidMount() {
    if (this.props.index) {
      stores.dispatch({
        type: types.CHANGE_ACTIVE,
        defaultActive: this.props.index,
      });
    }
  }
}

export default MyRoute;
