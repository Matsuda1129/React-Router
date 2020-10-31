import React from 'react';

const Question1 = (props) => {

  return (
    <div>
      <div style={{ color: "blue" }}>現在、生命保険に加入されていますか？</div>
      <form>
        <label>
          <input type="radio" value="yes" name="value" checked={props.value === "yes"} onChange={props.onChange} />はい
          <input type="radio" value="no" name="value" checked={props.value === "no"} onChange={props.onChange} />いいえ
        </label>
      </form>
    </div>
  )
}

export default Question1