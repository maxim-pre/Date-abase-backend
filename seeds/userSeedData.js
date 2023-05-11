import bcrypt from "bcrypt";
import dotenv from "dotenv";

dotenv.config();

export const users = [
  {
    firstName: "Maxim",
    lastName: "Prestwich",
    password: bcrypt.hashSync(process.env.PASSWORD1, 10),
    username: "maxim123",
    interestedInGender: ["F"],
  },
  {
    firstName: "Patrick",
    lastName: "Mallery",
    password: bcrypt.hashSync(process.env.PASSWORD1, 10),
    username: "Pat123",
    interestedInGender: ["F"],
  },
  {
    firstName: "Louise",
    lastName: "Jones",
    password: bcrypt.hashSync(process.env.PASSWORD1, 10),
    username: "Louise123",
    interestedInGender: ["M"],
  },
  {
    firstName: "Simeon",
    lastName: "Oye",
    password: bcrypt.hashSync(process.env.PASSWORD1, 10),
    username: "Simeon123",
    interestedInGender: ["F"],
  },
];
