require('dotenv').config();

const app = express()
const PORT = process.env.PORT || 8011;

app.listen(PORT, () => {
	console.log(`API Listening on port ${PORT}`);
});