import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Home = () => {
  return (
    <HomeWrapper>
      <h1>Welcome to our book store!</h1>
      <StyledLink to="/shop">
        <ShopButton>Shop Now</ShopButton>
      </StyledLink>
    </HomeWrapper>
  );
};

const HomeWrapper = styled.main`
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
`;

const ShopButton = styled.button`
  background: none;
  border: 1px solid gray;
  color: white;
  cursor: pointer;
  padding: 1rem;

  &:hover {
    background: gray;
  }
`;

const StyledLink = styled(Link)`
 align-self: center; 
`

export default Home;
