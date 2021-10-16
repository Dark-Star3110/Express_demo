class SiteController {
  // [GET] home page
  index(req, res) {
    res.render("home");
  }

  // [GET] search page
  search(req, res) {
    res.render("search");
  }
}

module.exports = new SiteController();
