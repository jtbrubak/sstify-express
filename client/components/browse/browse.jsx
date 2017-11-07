import React from 'react';
import { Link } from 'react-router';
import browseCss from '../../../public/stylesheets/browse-css.css';

class Browse extends React.Component {

  constructor(props) {
    super(props);
  }

  checkSelected(linkPath) {
    if (linkPath === this.props.location.pathname) { return 'selected-browse-nav'; }
  }

  render() {
    return (
      <div className="content-box">
        <div className="browse-header">
          <h1>Browse</h1><br/>
          <ul className="browse-nav">
            <li><Link to={"/browse/artists"}
              className={this.checkSelected('/browse/artists')}>ARTISTS</Link></li>
            <li><Link to={"/browse/albums"}
              className={this.checkSelected('/browse/albums')}>ALBUMS</Link></li>
          </ul>
          {this.props.children}
        </div>
      </div>
    );
  }
}

export default Browse;
