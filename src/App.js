import React, { useState } from 'react';
import './App.css';
import Botao from './components/Button';

import * as math from "mathjs";
import { RadioGroup, Radio, FormControl, FormLabel, FormControlLabel } from '@mui/material';

const arrOperacoes = ['*','/','+','.','-']

export default function App() {

  const [input, setInput] = useState("");

  function insereNum(val) {
    setInput(input + val);
  }

  function insereOperacao(val) {
    if(input === "" || (arrOperacoes.includes(input[input.length -1]) && arrOperacoes.includes(val)) ) {
      return
    } else {
      setInput(input + val)
    }
  }

  function calcular() {
    if (input === "" || arrOperacoes.includes(input[input.length - 1])) {
      return input;
    } else { 
      setInput(math.evaluate(input));
    }
  }

  return (
    <div className="App">
      <h1>React Calulator</h1>
      <div className="calc-wrapper">
      <Botao isInput>{input}</Botao>
        <div className="linha">
          <Botao onClick={insereNum}>7</Botao>
          <Botao onClick={insereNum}>8</Botao>
          <Botao onClick={insereNum}>9</Botao>
          <Botao onClick={insereOperacao}>/</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>4</Botao>
          <Botao onClick={insereNum}>5</Botao>
          <Botao onClick={insereNum}>6</Botao>
          <Botao onClick={insereOperacao}>*</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereNum}>1</Botao>
          <Botao onClick={insereNum}>2</Botao>
          <Botao onClick={insereNum}>3</Botao>
          <Botao onClick={insereOperacao}>+</Botao>
        </div>
        <div className="linha">
          <Botao onClick={insereOperacao}>.</Botao>
          <Botao onClick={insereNum}>0</Botao>
          <Botao onClick={() => setInput("")}>C</Botao>
          <Botao onClick={insereOperacao}>-</Botao>
        </div>
        <div className="linha">
          <Botao onClick={calcular}>=</Botao>
        </div>
      </div>
      <div className='footer'>
        <FormControl>
          <FormLabel >Theme:</FormLabel>
          <RadioGroup row defaultValue="Blue" aria-labelledby="demo-row-radio-buttons-group-label" name="row-radio-buttons-group">
            <FormControlLabel value="Red" control={<Radio sx={{
            color: '#eeeff1',
            '&.Mui-checked': {
              color: "#3C0303",
            },
        }}
        />} label="Red" />
            <FormControlLabel value="Green" control={<Radio sx={{
            color: '#eeeff1',
            '&.Mui-checked': {
              color: "#2F5D62",
            },
        }}/>} label="Green" />
            <FormControlLabel value="Blue" control={<Radio sx={{
            color: '#eeeff1',
            '&.Mui-checked': {
              color: "#3BA99C",
            },
        }}/>} label="Blue" />
          </RadioGroup>
        </FormControl>
      </div>
    </div>
  );
}