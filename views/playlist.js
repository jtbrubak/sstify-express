var Playlist = require('../models/playlist');

exports.show = function(response, playlistTracks) {
  return {
    id: response._id,
    title: response.title,
    tracks: playlistTracks.map((track) => {
      return {
        id: track.track._id,
        playlistOrd: track.track.playlistOrd,
        title: track.track.title,
        length: track.track.length,
        album: track.track.album.title,
        artist: track.track.album.artist.name,
        track_id: track.track._id,
        url: track.track.audioUrl,
        album_id: track.track.album._id,
        artist_id: track.track.album.artist._id,
        image_url: track.track.album.imageUrl
      }
    })
  }
}
