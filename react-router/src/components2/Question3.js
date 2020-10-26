import React from 'react';

const Question3 = (props) => {
  return (
    <div>
     <div style={{ color: "blue" }}>過去５年以内に、病気やけがで、手術をうけたことまたは継続して７日以上の入院をしたことがありますか？</div>
          <form>
          <input type="radio" name = "select3"/>はい
          <input type="radio" name = "select3"/>いいえ
          </form>
    </div>
  )
}

export default Question3