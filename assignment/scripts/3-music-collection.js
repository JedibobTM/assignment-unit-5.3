console.log('***** Music Collection *****')
// Safe Zone -- Write code below this line

var myCollection = [];

function addToCollection(collection, title, artist, yearPublished) {
  let record = {
    collection: collection,
    title: title,
    artist: artist,
    yearPublished: yearPublished
  }
  collection.push(record);
  function showCollection(collection){
    for (let album of record.collection) {
      console.log(record.title, record.artist, record.yearPublished)
    }
  }
  showCollection(myCollection);

  return record;
}

function findByArtist(findCollection, findArtist) {
  matching = [];
  if (findArtist && findCollection === myCollection.collection && myCollection.artist) {
    matching.push(collection);
    console.log(matching);
  }
  else {
    console.log("Nothing found");
  }
  return matching;
}

console.log(addToCollection(myCollection, "Name of the song: Carmen", "Artist: Lana Del Rey", "Year published: 2012"));
console.log(addToCollection(myCollection, "Name of the song: Carolina", "Artist: Taylor Swift", "Year published: 2022"));
console.log(addToCollection(myCollection, "Name of the song: Into the Unknown", "Artist: The Blasting Company", "Year published: 2014"));
console.log(addToCollection(myCollection, "Name of the song: We Don't Talk About Bruno", "Artist: Lin Manuel-Miranda", "Year published: 2021"));
console.log(addToCollection(myCollection, "Name of the song: My Heart Will Go On", "Artist: Celine Dion", "Year published: 1999"));
console.log(addToCollection(myCollection, "Name of the song: It's The End Of The World As We Know It", "Artist: REM", "Year published: 1985"));

// PLEASE DO NOT MODIFY THIS. Just leave it down here at the bottom. Think of it
// as a lil' chunk of friendly code that you don't need to understand right now.
// (It's used for automated testing.) 
try {
  module.exports = {
    myCollection: typeof myCollection !== 'undefined' ? myCollection : undefined,
    addToCollection: typeof addToCollection !== 'undefined' ? addToCollection : undefined,
    showCollection: typeof showCollection !== 'undefined' ? showCollection : undefined,
    findByArtist: typeof findByArtist !== 'undefined' ? findByArtist : undefined,
    search: typeof search !== 'undefined' ? search : undefined,
  }
} catch (e) {
  // Do nothing
}
