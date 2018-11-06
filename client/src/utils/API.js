module.exports = {
  getComparables: function(cb) {
    fetch("/api/getComparables", (err, response) => {
      if (err) console.log(err);
      cb(response);
    });
  }
};
