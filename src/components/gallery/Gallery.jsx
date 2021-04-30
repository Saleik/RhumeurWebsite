import React, { useState } from 'react';
import styled from 'styled-components';
import { v4 as uuidv4 } from 'uuid';
import { Container } from '../../styles/globalStyles';
import AliceCarousel from 'react-alice-carousel';
import 'react-alice-carousel/lib/alice-carousel.css';
import { motion } from 'framer-motion';
import { Picture } from './childs/Picture';

//Cst[component name] => custom components
const CstContainer = styled(Container)`
	grid-template-columns: repeat(3, 1fr);
	grid-template-rows: 30rem;
	grid-auto-rows: 30rem;
	grid-gap: 0.5rem;
	padding: 2rem 0.5rem;

	//Alice Carousel control
	.alice-carousel__prev-btn-wrapper {
		text-align: left;
	}

	.alice-carousel__next-btn-wrapper {
		text-align: right;
	}

	.alice-carousel__next-btn {
		right: 10%;
		transform: translateX(-50%);
	}

	.alice-carousel__prev-btn {
		left: 10%;
		transform: translateX(-50%);
	}

	.alice-carousel__next-btn,
	.alice-carousel__prev-btn {
		position: absolute;
		top: 50%;
		transform: translateY(-50%);
	}

	.alice-carousel__next-btn-item,
	.alice-carousel__prev-btn-item {
		color: white;
		font-weight: bold;
		background-color: rgb(0, 0, 0, 0.6);
		border-radius: 50%;
		width: 3rem;
		height: 3rem;
		position: relative;
		span {
			position: absolute;
			top: 50%;
			left: 50%;
			transform: translate(-50%, -50%);
			font-size: 4rem;
		}
		:hover {
			color: lightblue;
			transition: 0.3s;
		}
	}
	@media screen and (max-width: 992px) {
		grid-template-columns: repeat(2, 1fr);
		grid-template-rows: 50rem;
		grid-auto-rows: 50rem;
	}
`;

const LightBox = styled(motion.div)`
	position: fixed;
	width: 100vw;
	height: 100vh;
	background-color: rgba(0, 0, 0, 0.9);
	top: 50%;
	left: 50%;
	transform: translate(-50%, -50%);
	display: flex;
	align-items: center;
	justify-content: center;
	z-index: 100;
`;

/**
 * Gallery
 * @param {pictures} props
 * @returns
 */
export const Gallery = (props) => {
	const { pictures } = props;

	const [toggle, setToggle] = useState(false);
	const [activeIndex, setActiveIndex] = useState(0);

	//Carousel animate motion settings
	const variants = {
		visible: { opacity: 1 },
		hidden: { opacity: 0 },
	};

	//toggle lightbox on clicked picture
	const handleClick = (id = 0) => {
		if (toggle) {
			setActiveIndex(0);
		} else {
			setActiveIndex(id);
		}
		setToggle(!toggle);
	};

	//Convert array object to array of html Element for carousel
	const galleryToArray = () => {
		const items = [];
		pictures.forEach((item) => {
			items.push(
				<Picture
					key={uuidv4()}
					url={item.image}
					alt={item.caption}
					onClick={() => handleClick()}
					forCarousel
					caption={item.texte}
				/>
			);
		});
		return items;
	};

	return (
		<CstContainer>
			{pictures.map((picture, index) => (
				<Picture
					key={uuidv4()}
					url={picture.image}
					alt={picture.caption}
					onClick={() => handleClick(index)}
				/>
			))}
			{toggle && (
				<LightBox initial='hidden' animate='visible' variants={variants}>
					<AliceCarousel
						activeIndex={activeIndex}
						items={galleryToArray()}
						touchMoveDefaultEvents
						disableDotsControls
					/>
				</LightBox>
			)}
		</CstContainer>
	);
};
