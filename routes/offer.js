const express = require('express')
const router = express.Router();
const Offer = require('../services/modals/Offer');

router.get('/getAllOffer',(req,res)=>{
	const promise = Offer.find({});
		promise.then((data)=>{
			res.json(data);
		}).catch((err)=>{
			res.json(err);
		})
  });

router.get('/getOffer/:_id',(req,res)=>{
	const promise = Offer.findOne({_id:req.params._id});
		promise.then((data)=>{
			res.json(data);
		}).catch((err)=>{
			res.json(err);
		})
  });

  /*router.post('/addComment/:_id',,(req,res)=>{
    const {userComment,userRating} = req.body;
    Users.findOne({_id:req.user_id},(err,data)=>{
      var count =data.operatingComments.indexOf(req.params._id,-1);
      if(count<0){
        Operatings.findByIdAndUpdate({_id:req.params._id},
          {$push:{comments:{userComment:userComment,userRating:userRating,userId:req.user_id,userName:data.fullName,userPhoto:data.userPhoto}}}
        ,{new:true})
          .then(data=>{
            var newCommentCount =data.commentProperty.commentCount+1;
            var newCommentTotal =data.commentProperty.commentTotal+parseInt(userRating);
            var newCommentRating = newCommentTotal/newCommentCount;
            Users.findByIdAndUpdate({_id:req.user_id},{$push:{operatingComments:req.params._id}},{new:true})
            .then(data=>{
              Operatings.findByIdAndUpdate({_id:req.params._id},
                {$set:{commentProperty:{commentCount:newCommentCount,commentTotal:newCommentTotal,commentRating:newCommentRating}}}
              ,{new:true})
                .then(data=>{
                  res.json(data);
                })
                .catch(err=>{
                  res.json(err);
                })
            })
        })
      }else{
        res.json({
          status: false,
          message: 'Zaten yorum yaptın.'
        });
      }
    })
  });
  
  router.get('/getComment/:_id',verifyToken,(req,res)=>{
    const promise = Operatings.findOne({_id:req.params._id});
        promise.then((data)=>{
            res.json(data);
        }).catch((err)=>{
            res.json(err);
        })
  });*/
module.exports = router;
