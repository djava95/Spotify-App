import { React } from 'react';

import './Button.scss';

export default function Button({ content, handleClick }) {
  return (
    <button className='button' onClick={handleClick}> {content} </button>
  )
}

