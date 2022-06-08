export const dataRequest = async(url) => {
	const res = await fetch(url);
	try {
		if(res.ok && res.status >= 200 && res.status < 300) {
			const data = await res.json();
			return data;
		}
	} catch (error) {
		if(res.status > 400) return error(res.statusText);
	}
};