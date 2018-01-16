var Artist = require('../models/artist');

exports.index = function(result) {
  return result.map((artist) => {
    return {
      id: artist._id,
      name: artist.name,
      image_url: artist.thumbUrl
    }
  })
}

exports.show = function(result, albums, tracks) {
  return {
    id: result._id,
    name: result.name,
    image_url: result.bannerUrl,
    albums: albums.map((album) => {
      return {
        title: album.title,
        id: album._id,
        image_url: album.imageUrl,
        artist: {
          id: result._id,
          name: result.name,
        }
      }
    }),
    tracks: tracks.map((track) => {
      return {
        title: track.title,
        album_ord: track.albumOrd,
        id: track._id,
        length: track.length,
        url: track.audioUrl,
        artist: result.name,
        artist_id: result._id,
        album_id: track.album._id,
        image_url: track.album.imageUrl
      }
    })
  }
}
