const mongoose = require("mongoose");
const Chat = require("./models/chat.js");

main()
  .then(() => {
    console.log("connection is sucessful");
  })
  .catch((err) => console.log(err));

async function main() {
  await mongoose.connect("mongodb://127.0.0.1:27017/whatsapp");
}

let allChats = [
    {
    from: "nisha",
    to: "kaushal",
    msg: "get me out form this problem",
    created_at: new Date(),
  },
    {
    from: "ishi",
    to: "kaushal",
    msg: "message me after your study",
    created_at: new Date(),
  },
    {
    from: "alisha",
    to: "kaushal",
    msg: "i'm on my way",
    created_at: new Date(),
  },
    {
    from: "vikram",
    to: "devanad",
    msg: "kahan ho be aajkal",
    created_at: new Date(),
  },
    {
    from: "devanand",
    to: "vikram",
    msg: "apne ghar pe hu guys",
    created_at: new Date(),
  },
    {
    from: "pankaj",
    to: "vikram",
    msg: "TCS me vacancy nhi aarha h bhai av ",
    created_at: new Date(),
  },
    {
    from: "vikram",
    to: "pankaj",
    msg: "bhai bahut dikkt h yrr nhi ho parha h",
    created_at: new Date(),
  },
    {
    from: "hansda",
    to: "pankaj",
    msg: "dhayan do be inlog pe v",
    created_at: new Date(),
  },
    {
    from: "pankaj",
    to: "hansda",
    msg: "thik h bhai pura dhayan h",
    created_at: new Date(),
  },
    {
    from: "kaushal",
    to: "vikram",
    msg: "hmlog pe v dhayan do yrr",
    created_at: new Date(),
  },
];

Chat.insertMany(allChats);
  