import React from 'react';
import './App.css';
import {Site} from "./Site";

export type ArrObjType = {
    header: string
    body: string
    footer: string
}
type CarType = {
    manufacturer: string
    model: string
}

export type CarsType = Array<CarType>


const arr: Array<ArrObjType> = [{
    header: 'Header',
    body: 'Body',
    footer: 'footer'
}];

const topCars: CarsType = [
    {manufacturer:'BMW', model:'m5cs'},
    {manufacturer:'Mercedes', model:'e63s'},
    {manufacturer:'Audi', model:'rs6'}
]


function App() {
  return (
    <div className="App">
      <Site info={arr[0]} cars={topCars}/>
    </div>
  );
}

export default App;
