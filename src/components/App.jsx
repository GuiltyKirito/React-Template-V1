import renderAuthRoutes from '../lib/renderAuthRoutes';

import Header from './layouts/Header';
import Sidebar from './layouts/Sidebar';
import Footer from './layouts/Footer';

class App extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      contentHeight: 0,
      footerHeight: 0,
      headerHeight: 0,
    };
  }

  getContentHeight() {
    return window.innerHeight - this.state.headerHeight - this.state.footerHeight - 1;
  }

  setFooterHeight(height) {
    this.setState({ footerHeight: height });
  }

  setHeaderHeight(height) {
    this.setState({ headerHeight: height });
  }

  render() {
    return(
      <div className="wrapper">
        <Header setHeaderHeight={this.setHeaderHeight.bind(this)}/>
        <Sidebar />

        {/* Content Wrapper. Contains page content */}
        <div className="content-wrapper" style={{ minHeight: this.getContentHeight() }}>
          {renderAuthRoutes(this.props.routes)}
        </div>

        <Footer setFooterHeight={this.setFooterHeight.bind(this)} />
      </div>
    );
  }
}

export default App;
