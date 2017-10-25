import { Redirect, Switch } from 'react-router-dom';
import stores from '../stores';
import * as redirect from '../constant/redirect';
import MyRoute from './MyRoute';

export const renderAuthRoutes = routes =>
  routes ? (
    <Switch>
      {routes.map(({ component: Component, auth, ...rest }, key) => {
        return (
          <MyRoute
            key={key}
            {...rest}
            render={props => {
              if (auth !== undefined) {
                if (stores.getState().user.login === auth) {
                  return <Component {...rest} {...props} />;
                } else {
                  const pathname = stores.getState().user.login ? redirect.BASE : redirect.LOGIN;

                  return <Redirect to={{ pathname: pathname, from: props.location }} />;
                }
              } else {
                return <Component {...rest} {...props} />;
              }
            }}
          />
        );
      })}
    </Switch>
  ) : null;

export default renderAuthRoutes;
