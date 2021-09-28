
const router = require("express").Router()
const User = require("../models/User.model")
const mongoose = require("mongoose")

<<<<<<< HEAD


//<-----------------ROUTE TO DISPLAY USERS -------------------------------------------------------------------------------------------------------->
=======
//<-----------------ROUTE TO CREATE USERS -------------------------------------------------------------------------------------------------------->
>>>>>>> 525d1b74a8ce2ce00d525123b0a91d7d64920094

router.get( "/user/:id" , (req, res) =>{

    const {id} = req.params  //<----------------GETING ID INFO FROM URL PARAMS ------------------------------------------------------------------->

    User.find(id)
    .then(user => res.json(user))
    .catch(err => console.log(err))
})


//<-----------------ROUTE TO UPDATE USERS -------------------------------------------------------------------------------------------------------->

router.put( "/user/:id", (req,res) =>{

    const {id} = req.params  //<----------------GETING ID INFO FROM URL PARAMS ------------------------------------------------------------------->
    const {username, password, email, address, birthdate, sex, tel } = req.body  //<------------REACT CONTROLED FORM INFO STORED---------------->

    User.findByIdAndUpdate(id, {username, password, email, address, birthdate, sex, tel }, {new:true})
    .then(userUpdated => console.log(userUpdated) )
    .catch(err => console.log(err))
})


//<-----------------ROUTE TO UPDATE USERS -------------------------------------------------------------------------------------------------------->

router.delete("/user/:id", (req, res) =>{

    const {id} = req.params  //<----------------GETING ID INFO FROM URL PARAMS ------------------------------------------------------------------->

    User.findByIdAndDelete(id)
    .then(userDeleted => console.log(userDeleted))
    .catch(err => console.log(err))
})


module.exports = router