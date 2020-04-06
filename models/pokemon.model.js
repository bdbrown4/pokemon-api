module.exports = PokemonModel = {
    name: {
        type: String,
        required: true,
        unique: true
    },
    pokeId: {
        type: Number,
        required: true
    },
    gender: {
        type: String,
        required: true
    },
    powerType: {
        type: String,
        required: true
    },
    powerSubType: {
        type: String,
        required: false
    },
    attackPower: {
        type: Number,
        required: true
    },
    combatPower: {
        type: Number,
        required: true
    },
    defense: {
        type: Number,
        required: true
    },
    hp: {
        type: Number,
        required: true
    },
    attackMoves: {
        fastMove: {
            type: String,
            required: true
        },
        chargedMove: {
            type: String,
            required: true
        }
    }
};