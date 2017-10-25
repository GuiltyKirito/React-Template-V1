import { pure } from 'recompose';

const ContentBody = props => {
  return (
    <section className="content">
      {props.children}
    </section>
  );
};

export default pure(ContentBody);
