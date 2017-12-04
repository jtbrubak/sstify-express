var express = require('express');
var router = express.Router();
var path = require('path');
var album_controller = require('../controllers/albumController');
var artist_controller = require('../controllers/artistController');
var playlist_controller = require('../controllers/playlistController');
var playlist_follow_controller = require('../controllers/playlistFollowController');
var playlist_track_controller = require('../controllers/playlistTrackController');
var search_controller = require('../controllers/searchController');
var session_controller = require('../controllers/sessionController');
var user_controller = require('../controllers/userController');
var user_follow_controller = require('../controllers/userFollowController');


/* GET home page. */
router.get('/', function(req, res, next) {
  res.sendFile(path.join(__dirname, '../views', 'index.html'));
});

// ALBUM ROUTES
router.get('/api/albums/:id', album_controller.show);
router.get('/api/albums', album_controller.index);

// ARTIST ROUTES
router.get('/api/artists/:id', artist_controller.show);
router.get('/api/artists', artist_controller.index);

// PLAYLIST ROUTES
router.get('/api/playlists/:id', playlist_controller.show);
router.post('/api/playlists', playlist_controller.create);
router.delete('/api/playlists/:id', playlist_controller.destroy);

// PLAYLIST FOLLOW ROUTES
router.post('/api/playlist_follows', playlist_follow_controller.create);
router.delete('/api/playlist_follows/:id', playlist_follow_controller.destroy);

// PLAYLIST TRACK ROUTES
router.post('/api/playlist_tracks', playlist_track_controller.create);
router.delete('/api/playlist_tracks/:id', playlist_track_controller.destroy);

// SEARCH ROUTES
router.get('/api/search', search_controller.index);

// SESSION ROUTES
router.post('/api/session', session_controller.create);
router.delete('/api/session', session_controller.destroy);

// USER ROUTES
router.get('/api/users/:id', user_controller.show);
router.post('/api/users', user_controller.create);

// USER FOLLOW ROUTES
router.post('/api/user_follows', user_follow_controller.create);
router.delete('/api/user_follows/:id', user_follow_controller.destroy);


module.exports = router;
