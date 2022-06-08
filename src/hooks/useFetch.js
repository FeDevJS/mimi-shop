import { useEffect, useState } from 'react';
import { dataRequest } from '../helpers/dataRequest';

export const useFetch = (url) => {
	const [data, setData] = useState({ status: false, response: null, error: null });
	useEffect(() => {
		dataRequest(url)
			.then((res) => {
				return setData({
					status: true,
					response: res,
					error: null
				})
			})
	}, [url]);
	return data;
};