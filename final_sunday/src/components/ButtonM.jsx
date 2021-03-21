import React from 'react'
import { styled } from '@material-ui/core/styles';
import Button from '@material-ui/core/Button';



const MyButton = styled(Button)({
  background: 'linear-gradient(45deg, #FC766AFF 30%, #5B84B1FF 90%)',
  border: "none",
  borderRadius: 3,
  boxShadow: '0 3px 5px 2px rgba(255, 105, 135, .3)',
  color: 'white',
  height: 48,
  padding: '0 30px',
  letterSpacing:"5px"
});


function ButtonM(props) {
  
  return (
    <div>
      <MyButton onClick={props.click} disabled={props.dis}>{props.text}</MyButton>
    </div>
  )
}

export default ButtonM