import { pure } from 'recompose';

const Content = props => {
  return (
    <div className="content-wrapper" style={{ minHeight: window.innerHeight }}>
      {props.children}
    </div>
  );
};

export default pure(Content);
