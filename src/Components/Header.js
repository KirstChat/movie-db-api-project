import React from 'react';
import Form from './Form';

const Header = props => {

  return (
    <div>
      <h1>The Movie Database</h1>
      <Form getContent={props.getContent}/>
    </div>
  )
}
export default Header;
