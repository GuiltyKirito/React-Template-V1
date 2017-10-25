import renderAuthRoutes from '../lib/renderAuthRoutes';

const Root = ({ route }) => {
  return (
    <div>
      {renderAuthRoutes(route.routes)}
    </div>
  );
};

export default Root;
