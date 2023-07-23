const express = require('express')

const PORT = process.env.PORT || 3001

const app = express();

app.listen(PORT, () => {
    console.log('server start: PORT:' + PORT)
})

function getTimeResponse (url ,link) {
    app.get(url, (req, res) => {

        let start = Date.now();
      
        try {
           fetch(link);
        }
        catch(err) {
            return res.json({errorMessage: 'error: connection is exept'})
        }
      
        return  res.json({
            pingTime: (Date.now() - start),
            hrefName: (link)
        })
    
})
}


getTimeResponse ('/api1' ,'https://www.google.ru/')
