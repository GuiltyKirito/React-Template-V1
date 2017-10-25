import PropTypes from 'prop-types';
import classNames from 'classnames';

class ContentHeader extends React.Component {
  haveTitle() {
    return this.props.title ? true : false;
  }

  haveSubItem() {
    return this.props.subItem ? true : false;
  }

  render() {
    return (
      <section className="content-header">
        {
          this.haveTitle() && <h1>{this.props.title}<small>{this.props.description}</small></h1>
        }

        <ol className="breadcrumb">
          {/* header */}
          <li>
            <i className={classNames('fa', 'fa-lg', `fa-${this.props.icon}`)} />
            &nbsp; {this.props.header}
          </li>

          {/* item */}
          <li className={classNames({active: !this.haveSubItem()})}>
            {this.props.item}
          </li>

          {/* subItem */}
          {
            this.haveSubItem() && <li className="active">{this.props.subItem}</li>
          }
        </ol>
      </section>
    );
  }
}

ContentHeader.propTypes = {
  title: PropTypes.string,
  description: PropTypes.string,
  icon: PropTypes.string.isRequired,
  header: PropTypes.string.isRequired,
  item: PropTypes.string.isRequired,
  subItem: PropTypes.string,
};

export default ContentHeader;
