import PropTypes from "prop-types";
import {
  StatsSection,
  StatsTitle,
  StatsList,
  StatsLabel,
  StatsPercentage,
} from "./Statistics.styled";

const Statistics = ({ title, stats }) => {
  return (
    <StatsSection>
      {title.length > 0 && <StatsTitle className="title">{title}</StatsTitle>}

      <StatsList className="stat-list">
        {stats.map((stat) => (
          <li className="item" key={stat.id}>
            <StatsLabel className="label">{stat.label}</StatsLabel>
            <StatsPercentage className="percentage">
              {stat.percentage}%
            </StatsPercentage>
          </li>
        ))}
      </StatsList>
    </StatsSection>
  );
};

Statistics.propTypes = {
  title: PropTypes.string.isRequired,
  stats: PropTypes.array.isRequired,
};

export default Statistics;
