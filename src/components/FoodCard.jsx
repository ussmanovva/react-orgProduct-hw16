import styled from "styled-components";
import { ORG_PRODUCTS } from "./data";
import Title from "./UI/Title";

const FoodCard = ({ handleClick }) => {
	return (
		<>
			<Title>ORGANIC PRODUCTS</Title>
			<CardList>
				{ORG_PRODUCTS.map((item) => (
					<Card
						onClick={() => {
							handleClick(item);
						}}
						key={item.id}>
						<CardImage src={item.image} alt={item.title} />
						<CardContent>
							<CardTitle>{item.title}</CardTitle>
							<CardPrice>${item.price}</CardPrice>
						</CardContent>
					</Card>
				))}
			</CardList>
		</>
	);
};

export default FoodCard;

const CardList = styled.ul`
	width: 1210px;
	display: flex;
	flex-wrap: wrap;
	padding: 20px;
	margin: 10px;
	border-radius: 20px;
	list-style: none;
	background-color: #eaeaea;
	gap: 20px;
`;

const Card = styled.li`
	width: 167px;
	height: 210px;
	padding: 8px;
	background: #fff;
	border: 1px solid #ddd;
	border-radius: 5px;
	box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
	cursor: pointer;
	transition: transform 0.2s ease, box-shadow 0.2s ease;
	overflow: hidden;
	outline: 2px solid #eaeaea;
	outline-offset: -10px;
	&:hover {
		transform: scale(1.03);
		box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
	}
`;

const CardImage = styled.img`
	width: 100%;
	height: 130px;
	object-fit: cover;
`;

const CardContent = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	padding: 16px;
`;

const CardTitle = styled.h2`
	font-size: 18px;
	margin: 0;
	color: #333;
`;

const CardPrice = styled.h3`
	font-size: 16px;
	margin: 8px 0 0;
	color: #666;
`;
