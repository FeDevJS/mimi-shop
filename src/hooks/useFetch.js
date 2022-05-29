import { useEffect, useState } from 'react';
import { dataRequest } from '../helpers/dataRequest';

export const useFetch = (url) => {
	const [data, setData] = useState({ status: false, response: null, error: null });
	useEffect(() => {
		dataRequest({
			url,
			success: res => setData({status: true, response: res, error: null}),
			error: err => setData({status: true, response: null, error: err})
		});
	}, [url]);
	return data;
};