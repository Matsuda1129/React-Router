import React from 'react';

const PullDownDay = (props) => {
const days = props.days.map((day) => (
        <option >
          {day.name}
        </option>
));
    return (
      <form>
        <div>
          <select 
            value={props.usstate}
            onChange={props.onChange}>
            {days}
          </select>
        </div>
      </form>
    )
  }

export default PullDownDay