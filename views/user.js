var User = require('../models/user');

exports.show = function(response) {
  return {
    username: response.username,
    id: response._id,
    playlists: response.playlists.map((playlist) => {
      return {
        id: playlist._id,
        title: playlist.title
      }
    }),
    followed_playlists: response.followedPlaylists.map((playlist) => {
      return {
        id: playlist._id,
        title: playlist.title
      }
    }),
    followed_users: response.followedUsers.map((user) => {
      return {
        id: user._id,
        username: user.username
      }
    })
  }
}
