import mongoose from "mongoose";
import Meditation from "./models/Meditation.js";
import dotenv from "dotenv";
import { Faker } from "@faker-js/faker";
import fs from "fs";

// node seed.js ===> IIFE
dotenv.config();
const mp3Data = fs.readFileSync(
  "/home/user/Desktop/guided-medition/server/reflected-light-147979.mp3"
);

(async function () {
  //* Connection to the DB
  mongoose
    .connect(
      `mongodb+srv://${process.env.DB_USER}:${process.env.DB_PASS}@${process.env.DB_HOST}/${process.env.DB_NAME}`,
      {
        useNewUrlParser: true,
        useUnifiedTopology: true,
      }
    )
    .then(() => {
      console.log("Database connected! 😃");
    })
    .catch((error) => {
      console.log(error.message);
      console.log("🤨");
    });

  let Arr = [];
  try {
    for (let i = 0; i < 20; i++) {
      const data = {
        title: Faker.lorem.words(2),
        description: Faker.lorem.sentence(6),
        link: mp3Data,
        time: Faker.random.number({ min: 5, max: 20 }),
      };
      const newMeditation = new Meditation(data);
      Arr.push(newMeditation);
    }
    await Meditation.insertMany(Arr); //create works as well?
    console.log(`${Arr.length} meditations are created`);
  } catch (error) {
    console.log(error);
  }

  //* Close the connection
  mongoose.connection.close();
})();
