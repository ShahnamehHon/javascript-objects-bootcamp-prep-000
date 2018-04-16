var playlist = {
  artistName: 'Name',
  songTitle: 'songtitle'
};

function updatePlaylist (playlist, artistName, songTitle) {
  Object.assign({}, playlist, artistName, songTitle)
}