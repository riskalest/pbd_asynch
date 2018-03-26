function user(name, greeting, callback){
	return callback(name, greeting);
}
var cetak = user('Riska', 'Assalamuallaikum', function(name, greeting){
	return greeting+name;
});
console.log(cetak); 