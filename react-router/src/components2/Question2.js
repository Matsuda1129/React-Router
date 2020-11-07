import React from 'react';

const Question2 = (props) => {
  return (
    <div>
      <div  style={{ color: "blue" }}>現在入院中ですか。または、最近３か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</div>
      <form>
        <label>
          <input type="radio" value="yes" name="value2" checked={props.value2 === "yes"} onChange={props.onChange} />はい
          <input type="radio" value="no" name="value2" checked={props.value2 === "no"} onChange={props.onChange} />いいえ
        </label>
      </form>
    </div>
  )
}

export default Question2