var User = require('../models/user');

exports.show = function(response, playlists, followedPlaylists, followedUsers) {
  return {
    username: response.username,
    id: response._id,
    playlists: playlists.map((playlist) => {
      return {
        id: playlist._id,
        title: playlist.title
      }
    }),
    followed_playlists: followedPlaylists.map((playlist) => {
      return {
        id: playlist.playlist._id,
        title: playlist.playlist.title
      }
    }),
    followed_users: followedUsers.map((user) => {
      return {
        id: user.followed._id,
        username: user.followed.username
      }
    })
  }
}
