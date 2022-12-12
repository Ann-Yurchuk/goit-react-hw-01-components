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
              {items.map(item => (
                    <Tr key={item.id}>
                        <td>{item.type}</td>
                        <td>{item.amount}</td>
                        <td>{item.currency}</td>
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
