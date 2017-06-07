var express = require('express');
var router = express.Router();

/* GET home page. */
router.get('/', function(req, res, next) {
  res.render('index', { title: 'Examen Astrid Medina' });
});


router.get('/datosGenerales',function(req,res,next){
  var datosGenerales=[
    {"primer_nombre":"Astrid","segundo_nombre":"Yarelly","primer_apellido":"Medina","segundo_apellido":"Zuniga"},
    {"cuenta":"0801-1996-06996"},
    {"correo_electronico":"azzmedina5@gmail.com"}
    
  ];
  res.json(datosGenerales);
});

router.get('/suma', function(req,res,next){
  res.render('suma',{"txtNum1":"","msg":""});
  res.render('suma',{"txtNum2":"","msg":""});
});

var msgsSubmit = [];

router.post('/suma',function(req,res,next){
  console.log(req.body);
  var suma = [];
  var num1=parseInt(req.body.txtNum1);
  var num2=parseInt(req.body.txtNum2);
  suma = num1+num2;

    msgsSubmit.push("Primer Numero"+ " " + num1 + "+" + "Segundo Numero" + " " + num2 + "=" + suma);
    
    var msgs = msgsSubmit;
    var rtObject = {};
    rtObject.txtMsg=req.body.txtMsg;
      rtObject.msg=msgs;
  res.render('suma', rtObject);
});


module.exports = router;
