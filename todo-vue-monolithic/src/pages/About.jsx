import { Fragment, memo } from 'react';
import { NavLink } from 'react-router-dom';
import { AboutContent } from '../components/about';

const AboutPage = () => {
	return (
		<Fragment>
			<AboutContent />
			<NavLink to="/" end>
				Home
			</NavLink>
		</Fragment>
	);
};

export default memo(AboutPage);
