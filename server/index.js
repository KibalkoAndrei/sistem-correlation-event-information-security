const express = require('express')

const PORT = process.env.PORT || 3001

const app = express();

app.listen(PORT, () => {
    console.log('serber start')
})

app.get('/api', (req, res) => {

        let start = Date.now();
      
        try {
           fetch("http://127.0.0.1:7878/");
        }
        catch(err) {}
      
        return  res.json({
            message: (Date.now() - start)
        })
    
})