import * as mongoose from 'mongoose';
import {Animal} from './schema';

// connect to database
await mongoose.connect('mongodb://user:password@localhost:27018/one?authSource=admin');

// create new Animal
const cow = new Animal({
  name: 'Cow',
  sound: 'Moo',
});
await cow.save(); // saves to the database

// read all Animals
const animals = await Animal.find();
animals[0].speak(); // logs "Moo!"

// disconnect
await mongoose.disconnect();
