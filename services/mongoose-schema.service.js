const mongoose = require('mongoose');
const PokemonModel = require('../models/pokemon.model');

// Export Pokemon model
const PokemonSchema = module.exports = mongoose.model('pokemon', mongoose.Schema(PokemonModel, { collection: 'Pokemon' }));

module.exports.retrievePokemon = function (_req, _res) {
    PokemonSchema.find((_err, _pokemon) => {
        _err ? _res.json('There was a problem fetching your pokemon!', _err) :
        _res.json(_pokemon);
    }).limit(10000000000000);
}

module.exports.retrievePokemonByName = function (_req, _res) {
    PokemonSchema.findOne({ name: _req.params.name }, function (_err, _pokemon) {
    if (_err)
        _res.status('500').send('Something went wrong! We can\'t retrieve pokemon from our systems right now!', _err);
    if(!!_pokemon)
    {
        _res.json({
            message: `${_pokemon.name}, has been retrieved for you!`,
            data: _pokemon
        });
    } else {
        _res.status('404').send({
            message: `${_req.params.name } does not currently exist in our center's records!`
        });
    }
});
}

module.exports.addPokemon = function (_req, _res) {
    let Pokemon = new PokemonSchema();
    Pokemon.name = _req.body.name;
    Pokemon.gender = _req.body.gender;
    Pokemon.powerType = _req.body.powerType;
    Pokemon.powerSubType = _req.body.powerSubType;
    Pokemon.attackPower = _req.body.attackPower;
    Pokemon.combatPower = _req.body.combatPower;
    Pokemon.defense = _req.body.defense;
    Pokemon.hp = _req.body.hp;
    Pokemon.attackMoves = _req.body.attackMoves;
    
// save the Pokemon and check for _err
    Pokemon.save(function (_err) {
        if (_err)
            _res.status('400').send({
                displayMessage: 'Something went wrong! We can\'t send your pokemon to our systems right now!', 
                errorMessage: _err.errmsg
            });
        else {
            _res.json({
                message: `Your pokemon, ${Pokemon.name}, has been successfuly transported to our Pokemon Center!`,
                data: Pokemon
            });
        }
    });
}

module.exports.addItems = function (_callback, _limit) {
    
}

module.exports.retrieveItems = function (_callback, _limit) {
    
}
