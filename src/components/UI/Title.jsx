import styled from "styled-components";

const Title = ({ children }) => {
	return <StyledTitle>{children}</StyledTitle>;
};

export default Title;

const StyledTitle = styled.h1`
	width: 400px;
	text-align: center;
	margin: 10px auto;
	padding: 10px;
	border-radius: 10px;
	color: #333;
	background-color: #eaeaea;
`;
