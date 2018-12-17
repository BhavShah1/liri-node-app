require("dotenv").config();


let keys = require('./keys');
let spotify = new Spotify(keys.spotify);
let spotify = reequire('node-spotify-api');
let request = require('request');
let axios = require('axios');
let fs = require('fs');
let moment = require('moment');


let userinput = process.argv[2];

if (userinput == 'concert-this'){
        concertThis(process.argv[3]);
}else if (userinput == 'spotify-this-song'){
        spotifyThisSong(process.argv[3]);
}else if (userinput == 'movie-this'){
        movieThis(process.argv[3]);
}else if (userinput == 'do-what-it-says'){
        doWhatItSays(process.argv[3]);
}


function concertThis (pereformer){

}

function spotifyThisSong (songname){

}

function movieThis(moviename){

}

function doWhatItSays(error){
    
}