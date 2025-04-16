"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Animal = void 0;
var mongoose = require("mongoose");
var animalSchema = new mongoose.Schema({
    name: { type: String, required: true },
    sound: { type: String, required: true },
}, {
    methods: {
        speak: function () {
            console.log("".concat(this.sound, "!"));
        },
    },
});
exports.Animal = mongoose.model('Animal', animalSchema);
