import { pure } from 'recompose';

const BoxBody = props => {
  return (
    <div className="box-body">
      {props.children}
    </div>
  );
};

export default pure(BoxBody);
