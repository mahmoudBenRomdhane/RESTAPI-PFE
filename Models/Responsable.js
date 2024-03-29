const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const responsableschema = new Schema({
    nom :{
        type:String ,
        required: true
    },
    prenom : {
        type : String,
        required: true
    },
    email : {
        type : String,
        required : true
    },
    specialite: {
        type : String,
        required: true
    },
    numTelephone :{
        type: Number ,
        required : true
    },
    dateInscrption :{
        type : Date ,
        required : true,
        
    },
    password : {
        type : String,
        required : true  
    }
})
module.exports=mongoose.model('responsables',responsableschema);