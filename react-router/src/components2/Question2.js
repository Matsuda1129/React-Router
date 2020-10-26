import React from 'react';

const Question2 = (props) => {
  return (
    <div>
    <div style={{ color: "blue" }}>現在入院中ですか。または、最近３か月以内に医師の診察・検査の結果、入院・手術をすすめられたことはありますか？</div>
          <form>
          <input type="radio" name = "select2"/>はい
          <input type="radio" name = "select2"/>いいえ
          </form>
    </div>
  )
}

export default Question2