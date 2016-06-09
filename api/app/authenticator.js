module.exports = function(req, res, next){
    console.log('authenticator triggered: ' + new Date());
    if(req.get('_token')){
        console.log(req.get('_token'));
        next();
    }else{
        res.status(500).send({
            error: 'No authentication token found'
        });
    }
};