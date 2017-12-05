var Album = require('../models/album');

exports.index = function(result) {
  return result.map((album) => {
    return {
      id: album._id,
      title: album.title,
      image_url: album.imageUrl,
      year: album.year,
      artist: {
        name: album.artist.name,
        id: album.artist._id
      }
    }
  })
}

exports.show = function(result, tracks) {
  return {
    id: result._id,
    title: result.title,
    year: result.year,
    image_url: result.imageUrl,
    artist: {
      name: result.artist.name,
      id: result.artist._id
    },
    tracks: tracks.map((track) => {
      return {
        title: track.title,
        album_ord: track.albumOrd,
        length: track.length,
        id: track._id,
        image_url: track.imageUrl,
        url: track.audioUrl,
        artist: result.artist.name,
        artist_id: result.artist._id,
        album_id: result._id,
        image_url: result.imageUrl
      }
    })
  }
}
