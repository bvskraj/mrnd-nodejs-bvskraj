var express = require('express');
var router = express.Router();
var contact_db=[];
var c_id;

/* GET contacts */
router.get('/:id', function(req, res, next) {
	id=req.params.id;
	res.send(contact_db[id]);
			
});

router.post('/', function(req, res, next) {
  console.log(req.body);
  console.log('in post');
  var  obj=new Object(); 
  obj.firstName=req.body.firstName;
  obj.lastName=req.body.lastName;
  obj.phone=req.body.phone;
  res.statusCode=200;
  contact_db[c_id]=obj;
  res.send(''+c_id);
  c_id++;
});

router.put('/:id', function(req, res, next) {
  console.log(req.body);
  id=req.params.id;
	
	if(req.body.firstName != undefined)
		contact_db[id].firstName=req.body.firstName;
	if(req.body.lastName != undefined)
		contact_db[id].lastName=req.body.lastName;
	if(req.body.phone != undefined)
		contact_db[id].phone=req.body.phone;
	res.statusCode=200;
	res.send(contact_db[id]);



router.post('/:id/message/',function(req,res,next){
	var cmid = req.params.id;
	var c_obj,msg_id;
	c_obj = contact_db[cmid];
	msg_id = c_obj.msgs.push(req.body.msg);
	msg_id--;
	res.statusCode = 200;
	res.send(''+msg_id);
});


router.get('/:id/message/:mid', function(req, res, next) {
	//res.send('put contact details');
	var cmid = req.params.id;
	mid = req.params.mid;
  	res.statusCode = 200;
  	res.json(contact_db[c_id].msgs[m_id]);
});

});

module.exports = router;


