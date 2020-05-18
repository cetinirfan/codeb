const express = require('express')
const router = express.Router();
const Problem = require('../services/modals/Problem');
const multer =require('multer');
const fs =require('fs');
const storage = multer.diskStorage({
    destination: function(req, file, cb) {
      cb(null, './uploads/problem/');
    },
    filename: function(req, file, cb) {
      cb(null, file.originalname);
    }
  });

  const fileFilter = (req, file, cb) => {
    // reject a file
    if (file.mimetype === 'image/jpeg' || file.mimetype === 'image/png') {
      cb(null, true);
    } else {
      cb(null, false);
    }
  };

  const upload = multer({
    storage: storage,
    fileFilter: fileFilter
  });

router.post('/addProblem',upload.single('image'),(req,res,next)=>{
    const {telephone,category,description,lat,lon} =req.body;
	const NewProblem = new Problem({
        telephone,
        category,
        description,
        lat,
        lon,
        problemPhoto:'uploads/problem/'+req.file.filename
	});
  const promise = NewProblem.save();
	promise.then((data)=>{
		res.json(data)
	}).catch((err)=>{
		res.json(err);
	})
});

module.exports = router;
