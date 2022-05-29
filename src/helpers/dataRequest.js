export const dataRequest = async({ url, success, error }) => {
	const res = await fetch(url);
	if(res.ok && res.status >= 200 && res.status < 300) {
		const data = await res.json();
		success(data);
	} else if(res.status > 400) return error(res.statusText);
};