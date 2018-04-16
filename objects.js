var playlist = {
  artistName: 'Name',
  songTitle: 'songtitle'
};

function updatePlaylist (playlist, artistName, songTitle) {
  return Object.assign({}, playlist, {[artistName]: songTitle})
}