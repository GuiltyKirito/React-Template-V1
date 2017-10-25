import { Link } from 'react-router-dom';
import { translate } from 'react-i18next';

@translate(['notfound'])
class NotFound extends React.Component {
  constructor(props) {
    super(props);

    this.state = {};
  }

  componentWillMount() {
    document.body.style.backgroundColor = '#d2d6de';
  }

  componentWillUnmount() {
    document.body.style.backgroundColor = null;
  }

  render() {
    return (
      <div className="container">
        <div className="row">
          <div className="text-center col-md-6 col-md-offset-3">
            <h1>{this.props.t('notfound')}</h1>
            <Link to="/"><h4>{this.props.t('home')}</h4></Link>
          </div>
        </div>
      </div>
    );
  }
}

export default NotFound;
