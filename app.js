const steamUser = require('steam-user');
const config = require('./config.json');

const user = new steamUser();

//! go to config.json, fill in your steam info (accountName is not your display name! idk how to explain this just contact me on discord)
const options = {
    accountName: config.accountName,
    password: config.password
};

user.logOn(options);

user.on('loggedOn', () => {
    console.log(accountName + ' Has Logged On.')
    user.setPersona(7);
    user.gamesPlayed([]); //! as said (yes this is jumbly who cares) please fill in YOUR desired GAME IDS, if youd like to idle more than one just put a comma after the first app id then put the next one

    //! Please Read This -
    //! I do NOT recommend idling games whatsoever, valve probably doesnt give a shit as they have bigger things to crack down but yeah...

    //! --- STEAM GAME IDs ---

    //! To find these ids, use this website https://steamdb.info/ -  or lookup a video on how to enable urls...
    //! if you contact me on discord - FNBRChris#0001 i can help you even though this is pretty easy :)
});