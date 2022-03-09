export default async function handler(req, res) {
	const response = await fetch('http://localhost:3001/api/categories/add', {
		method: 'POST',
		headers: {
			'Content-Type': 'application/json',
		},
		body: JSON.stringify(req.body),
	});

	const json = await response.json();

	res.status(200).send(json);
}
