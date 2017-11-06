import React from 'react';
import { Link, withRouter } from 'react-router';

class Sidebar extends React.Component {

  constructor(props) {
    super(props);
    this.state = { showForm: false, title: "" };
    this.handleUpdate = this.handleUpdate.bind(this);
    this.handleClick = this.handleClick.bind(this);
    this.renderUsername = this.renderUsername.bind(this);
    this.togglePlaylistForm = this.togglePlaylistForm.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  componentWillMount() {
    this.props.fetchCurrentUserDetail(this.props.currentUser.id);
  }

  handleClick(e) {
    e.preventDefault();
    this.props.logout().then(() => this.props.router.replace('/login'));
  }

  togglePlaylistForm() {
    const newState = this.state.showForm ? false : true;
    this.setState({ showForm: newState, title: "" });
    this.forceUpdate();
  }

  renderUsername() {
    if (this.props.currentUser) {
      return (
        <Link className={this.checkCurrent(`/user/${this.props.currentUser.id}`)} to={`/user/${this.props.currentUser.id}/playlists`}>{this.props.currentUser.username}</Link>
      );
    } else {
      return <div></div>;
    }
  }

  handleSubmit(e) {
    e.preventDefault();
    const data = { playlist: { user_id: this.props.currentUser.id, title: this.state.title } };
      this.props.createPlaylist(data).then((playlist) => {
        this.togglePlaylistForm();
        this.props.router.replace(`/playlist/${playlist.id}`);
        this.props.fetchCurrentUserDetail(this.props.currentUser.id);
      }
    );
  }

  checkCurrent(linkPath) {
    if (this.props.path.includes(linkPath)) { return 'sidebar-selected'; }
  }

  showForm() {
    return this.state.showForm ? 'playlist-form-show' : 'playlist-form';
  }

  handleUpdate(e) {
    this.setState({ title: e.currentTarget.value });
  }

  renderPlaylists() {
    if (this.props.currentUserDetail.playlists) {
      return (
        <ul>
          {
            this.props.currentUserDetail.playlists.map((playlist) => (
              <Link key={playlist.id} to={`/playlist/${playlist.id}`} className={this.checkCurrent(`playlist/${playlist.id}`)}>
                <li>{playlist.title}</li>
              </Link>
            ))
          }
        </ul>
      );
    }
  }

  render() {
    return (
      <div className="sidebar">
        <div className="sidebar-top">
          <div className="sidebar-content">
            <div className="sidebar-logo">
              <img src="https://s3.amazonaws.com/sstify-dev/images/logo.png"/><span>SSTify</span>
            </div>
            <div className="sidebar-search">
              <Link to={'/search'}><span className={this.checkCurrent('search')}>Search</span>
              <span className={this.checkCurrent('search')}><i className="material-icons">search</i></span></Link>
            </div>
            <div className="browse-link">
              <Link to="/browse/artists" className={this.checkCurrent('browse')}><span>Browse</span></Link>
            </div>
          </div>
          <div className="sidebar-middle">
            <span id="playlist-header">Playlists</span>
            {this.renderPlaylists()}
          </div>
        </div>


        <div className="sidebar-bottom">
          <form id="playlist-form" className={this.showForm()}>
            <span>CREATE NEW PLAYLIST</span>
            <input type="text"
              value={this.state.title}
              placeholder="Playlist title"
              onChange={this.handleUpdate}
              className="playlist-title-input"/>
            <div className="button-row">
              <button onClick={this.togglePlaylistForm}>CANCEL</button>
              <button onClick={this.handleSubmit}>CREATE</button>
            </div>
          </form>
          <div className="create-playlist" onClick={this.togglePlaylistForm}>
            <i className="material-icons">control_point</i>
            <span>Add Playlist</span>
          </div>
          <span>{this.renderUsername()}</span>
          <button className="log-out-button" onClick={this.handleClick}>Log Out</button>
        </div>
      </div>
    );
  }
}

export default Sidebar;
