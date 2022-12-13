import PropTypes from "prop-types";
import { Section, StatisticList, StatisticItem } from './Statistics.styled';

export const Statistics = ({title, stats}) => {
    return <Section>
     {title && (<h2>{title}</h2>)} 
<StatisticList>
      {stats.map(({id, label, percentage}) => 
        <StatisticItem key={id}>
          <span>{label}</span>
          <span>{percentage + "%"}</span>
        </StatisticItem>
      )}
      </StatisticList>
</Section>
}

Statistics.propTypes = {
  title: PropTypes.string,
  stats: PropTypes.shape({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired,
    }).isRequired,

}