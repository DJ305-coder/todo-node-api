const express = require('express');
const app = express();

app.get('/', (req, res)=>{
    return res.write('Working');
});



const PORT = process.env.PORT || 5001
app.listen(PORT, ()=>{
    console.log(`App listening on port ${PORT}`)
});