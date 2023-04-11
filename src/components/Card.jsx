import styled from 'styled-components';
import { CardTitle } from './CardTitle';
import { CardContent } from './CardContent';
import { Price } from './Price';
import { Button } from './Button';

export const CardContainer = styled.div`
  margin: 4rem;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 300px;
  gap: 1.5rem;
  background-color: #fff;
  padding: 4rem 2rem;
  box-shadow: rgba(149, 157, 165, 0.2) 0px 8px 24px;
  border-radius: 2rem;
`;

export const Card = () => {
  return (
    <CardContainer>
      <CardTitle>Free</CardTitle>
      <CardContent>Basics for teams and developers</CardContent>
      <Price>$0/month</Price>
      <Button>Sign up</Button>
    </CardContainer>
  );
};
