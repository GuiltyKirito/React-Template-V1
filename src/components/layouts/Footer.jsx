import PropTypes from 'prop-types';
import { translate } from 'react-i18next';

@translate(['footer'])
class Footer extends React.Component {
  componentDidMount() {
    this.props.setFooterHeight(this.refs.footer.clientHeight);
  }

  render() {
    return(
      <footer ref="footer" className="main-footer">
        <strong>{this.props.t('copyright')}</strong>
      </footer>
    );
  }
}

Footer.propTypes = {
  setFooterHeight: PropTypes.func,
};

export default Footer;
