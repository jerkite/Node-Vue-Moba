const mongoose = require('mongoose')

const schema = new mongoose.Schema({
    name: { type: String },
    avatar: { type: String },
    title: { type: String },
    categories: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Category' }],
    scores: {
        difficult: { type: Number },
        skills: { type: Number },
        attack: { type: Number },
        survive: { type: Number },
    },
    skills: [{
        icon: { type: String },
        nmae: { type: String },
        description: { type: String },
        tips: { type: String },
    }],
    items1: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],

    items2: [{ type: mongoose.SchemaTypes.ObjectId, ref: 'Item' }],

    usage_tips: { type: String },
    battal_tips: { type: String },
    team_tips: { type: String },

    partner: [{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
        description: { type: String },
    }],
    
    restrain:[{
        hero: { type: mongoose.SchemaTypes.ObjectId, ref: 'Hero' },
        description: { type: String },
    }],

})

module.exports = mongoose.model('Hero', schema)