import styled from "styled-components";
import Title from "./UI/Title";

const FoodList = ({ food, updateAmount }) => {
	const totalItems = food.reduce((acc, item) => acc + item.amount, 0);
	const totalPrice = food.reduce(
		(acc, item) => acc + item.price * item.amount,
		0
	);

	return (
		<div>
			<Title>Number of cards: {totalItems}</Title>
			<List>
				{food.map((item) => (
					<ListItem key={item.id}>
						<ItemImage src={item.image} alt={item.title} />
						<ItemText>
							<ItemInfo>
								<span>{item.title}</span>
								<span>Price: ${item.price.toFixed(2)}</span>
								<span>Amount: {item.amount}</span>
							</ItemInfo>
							<ButtonContainer>
								<Button onClick={() => updateAmount(item.id, -1)}>-</Button>
								<Button onClick={() => updateAmount(item.id, 1)}>+</Button>
							</ButtonContainer>
						</ItemText>
					</ListItem>
				))}
			</List>
			<Title>Total price: ${totalPrice.toFixed(2)}</Title>
		</div>
	);
};

export default FoodList;

const List = styled.ul`
	width: 1250px;
	list-style-type: none;
	padding: 0;
	margin: 10px;
	background-color: #eaeaea;
	border-radius: 20px;
`;

const ListItem = styled.li`
	margin-bottom: 10px;
	padding: 16px;
	display: flex;
	align-items: center;
	background-color: white;
	border: 1px solid #ddd;
	border-radius: 8px;
`;

const ItemImage = styled.img`
	width: 100px;
	height: 100px;
	object-fit: cover;
	border-radius: 8px;
	margin-right: 16px;
`;

const ItemText = styled.div`
	display: flex;
	align-items: center;
	justify-content: space-between;
	width: 100%;
	margin-left: 50px;
`;

const ItemInfo = styled.div`
	display: flex;
	align-items: center;
	gap: 100px;
	span {
		&:first-child {
			font-size: 16px;
			font-weight: 600;
		}
	}
`;

const ButtonContainer = styled.div`
	display: flex;
	align-items: center;
`;

const Button = styled.button`
	width: 30px;
	height: 30px;
	background-color: #f0f0f0;
	border: 1px solid #ddd;
	border-radius: 4px;
	margin: 0 4px;
	padding: 8px;
	cursor: pointer;
	font-size: 16px;
	line-height: 1;
	&:hover {
		background-color: #e0e0e0;
	}
`;
