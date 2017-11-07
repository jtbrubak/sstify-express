import React from 'react';
import SidebarContainer from '../sidebar/sidebar_container';
import PlaybarContainer from '../playbar/playbar_container';
import authCss from '../../../public/stylesheets/auth-css.css';

class Main extends React.Component {

  constructor(props) {
    super(props);
  }

  componentWillReceiveProps() {
    this.render();
  }

  render() {
    return (
      <div className="main-container">
        <div className="top-side-elements">
          <SidebarContainer router={this.props.router}/>
          {this.props.children}
        </div>
        <div className="bottom-side-elements">
          <PlaybarContainer/>
        </div>
      </div>
    );
  }
}

export default Main;
