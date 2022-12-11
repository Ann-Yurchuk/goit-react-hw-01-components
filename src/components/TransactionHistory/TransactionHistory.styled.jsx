import styled from '@emotion/styled';

export const Table = styled.table`
 th{
font-family: "Bebas Neue", san-serif;
text-decoration-color: white;
color: white;}
td, th {border: 1px solid #800;
table-layout: fixed;
text-align: center;
width: 800px;
height: auto;
margin-bottom: 20px;
border-collapse: collapse;
border: 1px solid rgb(230, 228, 223);
box-shadow: rgb(0 0 0 / 20%) 0px 3px 3px -2px,
        rgb(0 0 0 / 14%) 0px 3px 4px 0px,
        rgb(0 0 0 / 12%) 0px 1px 8px 0px;}
`

export const Thead = styled.thead`
background-color: rgb(15, 160, 205);
padding: 12px;
`
export const Tr = styled.tr`
border-collapse: collapse;
border: 1px solid rgb(230, 228, 223);
color: gray;
&:nth-child(even) {
background-color: rgb(218, 220, 216);
`