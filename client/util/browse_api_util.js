export const fetchAllArtists = () => {
  return $.ajax({
    method: 'get',
    url: `/api/artists`
  });
};

export const fetchAllAlbums = () => {
  return $.ajax({
    method: 'get',
    url: `/api/albums`
  });
};
