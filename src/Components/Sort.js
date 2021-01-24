import React, {useContext, useState} from 'react'

import { createNewArr, getInterval} from '../Utility/functions'
import { maxNum, windowWidth, maxElems } from '../Utility/vars'
import 'react-bootstrap-range-slider/dist/react-bootstrap-range-slider.css';
import RangeSlider from 'react-bootstrap-range-slider';
import { v4 as uuidv4 } from 'uuid';
import { MenuBar } from '../Components/MenuBar';


function Sort({context, sortingAlgorithm, name}) {

    const {array, setArray, width, setWidth, elems, setElems, interval, setInterval} = useContext(context);

    const [variant, setVariant] = useState('primary');

    return (
        <div class='app'>    
            <MenuBar/>
            <h2 className='title'>{name}</h2>
            <div className='wrapper'>
                <div style={{height: maxNum, width: 0}} key={0} className='hidden-element'></div>
                {array.map((element, idx) => {
                    return (
                        <div style={{height: element, width: width}} key={uuidv4()} className='element'>
                            <div className='numberText' key={uuidv4()}>{(width > 50) && element}</div>
                        </div>
                    );
                })}
                <div className='infoWrapper'>
                    <p className='info'>No. of Elements: {array.length};</p>
                    <p className='info'> Comparisons: <span id='comparisons'>0</span>;</p>
                    <RangeSlider tooltip='off' variant={variant} className='slider-bar sort-elem' value={elems} min={7} max={maxElems} onChange={(e) => {
                        setElems(parseInt(e.target.value));
                        setWidth((((0.74 * windowWidth)/((parseInt(e.target.value)) + 1.0)) - 10));
                        setArray(createNewArr(parseInt(e.target.value)));
                        setInterval(getInterval(parseInt(e.target.value)));
                    }}/>
                </div>
            </div>
            
            <button className='sort-button sort-elem' type='button' onClick={() => setArray(createNewArr(elems))}>New Array</button>

            <button className='sort-button sort-elem' type='button' onClick={() => {
                let elems = document.getElementsByClassName('sort-elem');
                for (let i = 0; i < elems.length; i++) {
                    elems.item(i).setAttribute("disabled", true);
                    setVariant('secondary');
                }
                let {time, newArr} = sortingAlgorithm(array, interval);
                setTimeout(() => {
                    setArray(newArr);
                    elems = document.getElementsByClassName('sort-elem');
                    for (let i = 0; i < elems.length; i++) {
                        elems.item(i).removeAttribute('disabled');
                        setVariant('primary');
                    }
                }, time);
            }}>Sort</button>
        </div>
    )
}

export default Sort
