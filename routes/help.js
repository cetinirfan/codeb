const express = require('express');
const router = express.Router();
const Help = require('../services/modals/Help');

router.post('/addHelp1',(req,res,next)=>{
    const {telephone,tc,fullName,address,countPerson,countMoney,lat,lon,working,socialSupport} =req.body;
	const NewHelp = new Help({
        telephone,
        tc,
		fullName,
		address,
		countPerson,
		countMoney,
		working,
		lat,
		lon,
		socialSupport,
		type:1,
	});
  const promise = NewHelp.save();
	promise.then((data)=>{
		res.json(data)
	}).catch((err)=>{
		res.json(err);
	})
});


router.post('/addHelp2',(req,res,next)=>{
    const {telephone,tc,fullName,schollName,countPerson,countMoney,working,socialSupport} =req.body;
	const NewHelp = new Help({
        telephone,
        tc,
		fullName,
		schollName,
		countPerson,
		countMoney,
		working,
		socialSupport,
		type:2,
	});
  const promise = NewHelp.save();
	promise.then((data)=>{
		res.json(data)
	}).catch((err)=>{
		res.json(err);
	})
});

router.get('/getAllHelp',(req,res)=>{
	const promise = Help.find({});
		promise.then((data)=>{
			res.json(data);
		}).catch((err)=>{
			res.json(err);
		})
  });

router.get('/getHelp/:_id',(req,res)=>{
	const promise = Help.findOne({_id:req.params._id});
		promise.then((data)=>{
			res.json(data);
		}).catch((err)=>{
			res.json(err);
		})
  });
module.exports = router;
