const sql = require('../db');

module.exports = class Recipe {
    constructor(title, description, pic, time, ingredients, tags, steps) {
        this.title = title;
        this.description = description;
        this.pic = pic;
        this.time = time;
        this.ingredients = ingredients;
        this.tags = tags;
        this.steps = steps;
    }
}