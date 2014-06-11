var express = require('express')
var router = express.Router();
var crypto = require('crypto')
var fs = require('fs')


router.post('/upload', function(req, res) {
  fs.readFile(req.files.file.path, function (err, data) {
    var filename = crypto.createHash('md5').update(req.files.file.path).update(new Date().toISOString()).digest('hex');
    var newPath = "public/uploads/"+filename;
    var shortPath = "/uploads/"+filename
    fs.writeFile(newPath, data, function (err) {
      if (err) {
        return console.log("writingFile", err, newPath)
      }
      res.send(shortPath);
    });
  });
})


module.exports = router