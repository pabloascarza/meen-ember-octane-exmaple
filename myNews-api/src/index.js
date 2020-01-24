const App = require('./Application/App');
const PORT = 4000;
const app = new App();

app.server.listen(PORT, function() {
	    console.log("Server is running on Port: " + PORT);
});
