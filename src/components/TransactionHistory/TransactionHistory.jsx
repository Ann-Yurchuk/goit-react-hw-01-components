import PropTypes from "prop-types";
import {Table, Thead, Tr } from './TransactionHistory.styled';

export const TransactionHistory = ({ items }) => {
    return <Table>
      <Thead>
        <Tr>
            <th>Type</th>
            <th>Amount</th>
            <th>Currency</th>
            </Tr> 
        </Thead>
        <tbody>
            {items.map(({ id, type, amount, currency }) => (
                    <Tr key={id}>
                        <td>{type}</td>
                        <td>{amount}</td>
                        <td>{currency}</td>
                    </Tr>))}
        </tbody>
   </Table>
};



TransactionHistory.propTypes = {
    items: PropTypes.shape({
    id: PropTypes.string.isRequired,
    type: PropTypes.string.isRequired,
    amount: PropTypes.number.isRequired,
    currency: PropTypes.string.isRequired,
    }).isRequired, 
};
