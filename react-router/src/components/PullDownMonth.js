import React from 'react';

const PullDownMonth = (props) => {
const months = props.months.map((month) => (
        <option >
          {month.name}
        </option>
));
    return (
      <form>
        <div>
          <select
            value={props.usstate}
            onChange={props.onChange}>
            {months}
          </select>
        </div>
      </form>
    )
  }

export default PullDownMonth