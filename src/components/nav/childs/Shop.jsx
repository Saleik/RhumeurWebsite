import React from 'react';
import { motion } from 'framer-motion';
import styled from 'styled-components';

const Div = styled.div`
	grid-column: 3;
	width: 4rem;
	grid-row: 1;
	align-self: center;
	padding-left: 3rem;
	i {
		color: rgba(0, 0, 0);
		font-size: 2rem;
	}

	@media screen and (max-width: 1024px) {
		i {
			font-size: 3rem;
		}
	}
`;

export const Shop = (props) => {
	const { url } = props;
	return (
		<Div>
			<a href={url}>
				<motion.i
					whileHover={{
						scale: 1.2,
						color: 'rgba(173, 216, 230)',
						transition: { duration: 0.3 },
					}}
					whileTap={{ scale: 0.9 }}
					className='fas fa-store'
				/>
			</a>
		</Div>
	);
};
