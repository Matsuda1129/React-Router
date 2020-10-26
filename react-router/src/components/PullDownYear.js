import React from 'react';

const PullDownYear = (props) => {
const years = props.years.map((year) => (
        <option >
          {year.name}
        </option>
));
    return (
      <form>
        <div>
          <select
            value={props.usstate}
            onChange={props.onChange}>
            {years}
          </select>
        </div>
      </form>
    )
  }

export default PullDownYear