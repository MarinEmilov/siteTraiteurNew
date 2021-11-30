const express = require("express");
let session = require("express-session");
let route = require("./src/routes/pageBase.js");
let db = require("./src/model/db.js");
const Plat = require("./src/model/Plat.js");
const Image = require("./src/model/Image.js");
const { request } = require("express");
const fileUpload = require("express-fileupload");
const app = express();
const port = 3015;

// ICI les middleware !
app.set("view engine", "pug");
app.use(express.static("public"));

// get et post
app.use(express.json());
app.use(express.urlencoded());
app.use(fileUpload());

// Session avec notre cle
app.use(
  session({
    secret: "fkladjsf9ads08f7391r48fhjeoqr3;fnvhv134789fy3o149hfr34",
    resave: true,
    saveUninitialized: true,
  })
);

app.use(route);


(async () => {
  await db.sequelize.sync({ force: true });
  Plat.create({namePlat:"Risoto", description :"notre risoto aux fruit de mer", prix: 15, optionVG: 1,});
  Plat.create({namePlat:"Salade", description :"notre risoto aux fruit de mer", prix: 20, optionVG: 0,});
  Plat.create({namePlat:"Tomates", description :"notre risoto aux fruit de mer", prix: 25, optionVG: 1, });
  Plat.create({namePlat:"Saumon", description :"notre risoto aux fruit de mer", prix: 30, optionVG: 0, });
})();



// Server Start

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
