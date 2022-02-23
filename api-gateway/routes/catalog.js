var express = require("express");
var router = express.Router();
const seneca = require("seneca")();
// const axios = require("axios");
seneca.quiet();
seneca.client(9000);

router.get("/getallbooks", (req, res, next) => {
  seneca.act({ role: "catalog", op: "getallbooks" }, (err, result) => {
    if (err) res.end("Something went wrong");
    res.json(result);
  });
});
router.get("/title/:title", (req, res, next) => {
  const title = req.params.title;
  seneca.act(
    { role: "catalog", op: "searchbytitle", title: title },
    (err, result) => {
      if (err) res.end("Something went wrong");
      res.json(result);
    }
  );
  // axios.get(`http://localhost:9000/act?role=catalog&op=searchbytitle&title=${title}`)
  // .then(response => res.json(response.data))
  // .catch(err=>res.end("Something went wrong"))
});
router.get("/category/:category", (req, res, next) => {
  const category = req.params.category;
  seneca.act(
    { role: "catalog", op: "searchbycategory", category: category },
    (err, result) => {
      if (err) res.end("Something went wrong");
      res.json(result);
    }
  );
});
router.get("/author/:author", (req, res, next) => {
  const author = req.params.author;
  seneca.act(
    { role: "catalog", op: "searchbyauthor", author: author },
    (err, result) => {
      if (err) res.end("Something went wrong");
      res.json(result);
    }
  );
});
router.get("/rating/:rating", (req, res, next) => {
  const rating = req.params.rating;
  seneca.act(
    { role: "catalog", op: "searchbyrating", rating: rating },
    (err, result) => {
      if (err) res.end("Something went wrong");
      res.json(result);
    }
  );
});
module.exports = router;
