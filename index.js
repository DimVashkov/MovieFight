// API key f433ba1a

const fetchData = async () => {
	const response = await axios.get('http://www.omdbapi.com/', {
		params: {
			apikey: 'f433ba1a',
			i: 'tt0848228',
		},
	});
	console.log(response.data);
};

fetchData();
