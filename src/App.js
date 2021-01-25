import React, { useState } from 'react';
import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import { HashRouter as Router, Route, Switch } from "react-router-dom";

import Sort from './Components/Sort'

import { bubbleSort, mergeSort, heapSort, quickSort, insertionSort, selectionSort } from './Utility/sorting'

import { createNewArr, getInterval } from './Utility/functions'

import { elemWidth , numElems } from './Utility/vars'



function App() {

  let list = createNewArr(numElems);
  const [array, setArray] = useState(list);
  const [width, setWidth] = useState(elemWidth);
  const [elems, setElems] = useState(numElems);
  const [interval, setInterval] = useState(getInterval(elems));
  const ArrayContext = React.createContext({array, setArray, width, setWidth, elems, setElems, interval, setInterval});

  return (
    <React.Fragment>
        <Router>
          <Switch>
            <Route exact path="/">
              <Sort context={ArrayContext} sortingAlgorithm={bubbleSort} name={'Bubble Sort'}/>
            </Route>
            <Route path="/merge-sort">
              <Sort context={ArrayContext} sortingAlgorithm={mergeSort} name={'Merge Sort'}/>
            </Route>
            <Route path="/quick-sort">
              <Sort context={ArrayContext} sortingAlgorithm={quickSort} name={'Quick Sort'}/>
            </Route>
            <Route path="/heap-sort">
              <Sort context={ArrayContext} sortingAlgorithm={heapSort} name={'Heap Sort'}/>
            </Route>
            <Route path="/insertion-sort">
              <Sort context={ArrayContext} sortingAlgorithm={insertionSort} name={'Insertion Sort'}/>
            </Route>
            <Route path="/selection-sort">
              <Sort context={ArrayContext} sortingAlgorithm={selectionSort} name={'Selection Sort'}/>
            </Route>
          </Switch>
        </Router>
    </React.Fragment>
  );
}



export default App;
