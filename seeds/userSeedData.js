import bcrypt from "bcrypt";
import { password1, password2, password3, password4 } from "../config/topSecret.js";

export const users = [
  {
    firstName: "Maxim",
    lastName: "Prestwich",
    password: bcrypt.hashSync(password1, 10),
    username: "maxim123",
    interestedInGender: ["F"],
  },
  {
    firstName: "Patrick",
    lastName: "Mallery",
    password: bcrypt.hashSync(password2, 10),
    username: "Pat123",
    interestedInGender: ["F"],
  },
  {
    firstName: "Louise",
    lastName: "Jones",
    password: bcrypt.hashSync(password3, 10),
    username: "Louise123",
    interestedInGender: ["M"],
  },
  {
    firstName: "Simeon",
    lastName: "Oye",
    password: bcrypt.hashSync(password4, 10),
    username: "Simeon123",
    interestedInGender: ["F"],
  },
];
