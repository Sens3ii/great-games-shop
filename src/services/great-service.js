export default class GreatService {
	_apiBase = "https://my-json-server.typicode.com/Sens3ii/great-games-shop";

	async getResource(url) {
		const res = await fetch(`${this._apiBase}${url}`);
		console.log(res);
		if (!res.ok) {
			throw new Error(`Could not fetch ${url} , received ${res.status}`);
		}
		return await res.json();
	}
}
