import React from 'react';

const Question1 = (props) => {
  return (
    <div>
    <div style={{ color: "blue" }}>現在、生命保険に加入されていますか？</div>
          <form>
          <input type="radio" name = "select1"/>はい
          <input type="radio" name = "select1"/>いいえ
          </form>
    </div>
  )
}

export default Question1