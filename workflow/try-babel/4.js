function ajax (url) {
    fetch(url)
    .then(data => data.json())
    .then(data => dataGen.next(data))
}
function *steps() {
    console.log('fetching beers');
    const beers = yield ajax('http://api.react.beer/v2/search?q=hops&type=beer');
    console.log(beers);
    
    console.log('fetching wes');
    const wes = yield ajax('http://api.github.com/user/wesbos');
    console.log(wes);

    console.log('fetching fat joe');
    const fatJoe = yield ajax('http://api.discogs.com/artists/51980');
    console.log(fatJoe);
}

const dataGen = steps();
dataGen.next();