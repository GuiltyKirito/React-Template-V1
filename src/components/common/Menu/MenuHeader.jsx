import { pure } from 'recompose';

const MenuHeader = props => {
  return (
    <li className="header">
      {props.children}
    </li>
  );
};

export default pure(MenuHeader);
