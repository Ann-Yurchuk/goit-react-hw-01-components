import styled from '@emotion/styled';

export const Section = styled.section`
font-weight: 400;
font-size: 24px;
font-family: sans-serif;
display: flex;
flex-direction: column;
align-items: center;
width: 400px;
height: auto;
border: 1px solid rgb(230, 228, 223);
border-bottom: none;
border-radius: 1%;
padding-top: 20px;
margin-bottom: 15px;
background-color: white;
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
        rgb(0 0 0 / 14%) 0px 3px 4px 0px,
        rgb(0 0 0 / 12%) 0px 1px 8px 0px;
`

export const StatisticList = styled.ul`
  display: flex;
  justify-content: space-beetween;
  width: 100%;
  margin-top: 15px;
`
const itemColor = () => {
  const randomColor = Math.floor(Math.random() * 16777215).toString(16);
  return randomColor;
}

export const StatisticItem = styled.li`
  display: flex;
  flex-direction: column;
  font-size: 20px;
  width: 100%;
  background-color: #${itemColor};
  font-weight: 300;
  font-size: 22px;
  font-family: 'Oxygen';
  align-items: center;
`
