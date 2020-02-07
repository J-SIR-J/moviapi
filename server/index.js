const express = require ('express');
const mongoose = require('mongoose');
const cors = require('cors')

// const directors = require('./controllers/director');
const app = express ();
const PORT = process.env.PORT || 6660;
const URL_MONGO ='mongodb+srv://Josue:cintaroja123@cluster0-8d1nm.mongodb.net/test?retryWrites=true&w=majority'

const movies =  require('./controllers/movies.js');

app.use(express.json());
app.use(cors());
app.use('/movies', movies);
// app.use('/directors' , directors);

mongoose.connect(URL_MONGO,{useNewUrlParser: true ,  useUnifiedTopology: true }, (error) => {
    if(!error){
        console.log('conneted to mongoDB')
    }else{
        console.log(error)
    }

});
 

 
app.listen(6660, () =>{
    console.log(`Server initialized on PORT ${PORT}`)
});

