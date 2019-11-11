exports.handler = function (event, context) {
	console.log(s)
	context.succeed('hello ' + event.name)
};

