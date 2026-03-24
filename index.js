const express = require('express');
const QRcode = require('qrcode');
const app = express();  
app.use(express.static('public'));
app.use(express.json());

app.post('/generate',async(req, res) => {
    try{
        const qr = await QRcode.toDataURL(req.body.text);
        res.json({qr});
    }catch(err){
        res.status(500).json({error: 'Failed to generate QR code'});    
        
    }
});
app.listen(3000, () => { 
    console.log('Server is running on port 3000');
});