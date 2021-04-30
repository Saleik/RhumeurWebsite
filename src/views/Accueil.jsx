import React from 'react';
import { useData } from '../contexts/dataContext';
import styled from 'styled-components';
import { Container } from '../styles/globalStyles';
import { Button } from '../components/button/Button';
import { motion } from 'framer-motion';

const Section = styled.section`
	padding-top: 8rem;
	height: 100vh;
	width: 100vw;
	background: linear-gradient(180deg, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)),
		url(${({ url }) => url}) no-repeat center;
	background-size: cover;
`;

//Cst[component name] => custom components
const CstContainer = styled(Container)`
	grid-template-columns: 1fr 1fr;
	grid-template-rows: 100vh;

	span {
		grid-column: 1 / span2;
		grid-row: 1;
		justify-self: center;
		align-self: flex-end;
		color: white;
		font-weight: bold;

		@media screen and (max-width: 1024px) {
			font-size: 1.8rem;
		}
	}
`;

const InsertionContainer = styled.div`
	grid-column: 2;
	grid-row: 1;
	color: white;
	display: flex;
	flex-direction: column;
	justify-content: center;
	align-items: center;
	text-align: justify;
	line-height: 2rem;
	padding: 0 2rem;

	h1 {
		font-family: 'Finger Paint', cursive;
		font-size: 5rem;
		font-weight: normal;
		color: white;
		-webkit-text-stroke: 0.1rem black;
		margin: 0;
		padding: 2rem 0;
	}
	p {
		font-size: 1.8rem;
	}
	@media screen and (max-width: 1024px) {
		line-height: 2.5rem;
	}

	@media screen and (max-width: 500px) {
		grid-column: 2;
		justify-self: start;
		align-self: center;
		line-height: 4.5rem;
		margin-right: 2rem;
		h1 {
			font-size: 7rem;
		}
		p {
			font-size: 2.5rem;
		}
	}
`;

export const Accueil = () => {
	//custom useContext
	const { data } = useData();
	//background image
	const url = data.accueil.image.url;

	//Text insertion
	const insertion = data.accueil.text;

	return (
		<Section id='accueil' url={url + '?fm=jpg&h=1080&w=1920'}>
			<CstContainer>
				<InsertionContainer>
					<motion.h1
						initial={{
							y: '-130%',
							opacity: 0,
						}}
						animate={{
							y: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 0.5,
						}}>
						Rhumeur
					</motion.h1>
					<motion.p
						initial={{
							x: '-50%',
							opacity: 0,
						}}
						animate={{
							x: 0,
							opacity: 1,
						}}
						transition={{
							duration: 1,
							delay: 0.5,
						}}>
						{insertion}
					</motion.p>
					<Button
						fontSize={'1.5rem'}
						fontColor='white'
						link={data.menu.eshopLink}>
						Acheter
					</Button>
				</InsertionContainer>
				<span>
					*L'abus d'alcool est dangereux pour la santé. A consommer avec
					modération.*
				</span>
			</CstContainer>
		</Section>
	);
};
