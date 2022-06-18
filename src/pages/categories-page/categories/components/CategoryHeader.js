import { useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCircleArrowLeft } from '@fortawesome/free-solid-svg-icons';
import './category-header.css';

export const CategoryHeader = ({ data }) => {
	const navigate = useNavigate();
	const handleReturn = () => navigate('/products')
	return (
		<>
			<h3 className='category-header'>
				<span className='arrow-back' onClick={handleReturn}><FontAwesomeIcon icon={faCircleArrowLeft} /></span>
				<span>{data.response == null ? 'Not found.' : data.response !== null ? data.response[0].category : 'Loading...'}</span>
			</h3>
		</>
	);
};