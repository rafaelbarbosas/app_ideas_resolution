import React, { useState, useEffect } from 'react';
import './style.css';

export const MultipleList = () => {

    const numbersEnd = 144;
    const allNumbers = [...Array(numbersEnd).keys()].map(x => ++x);

    function multipleFinder(multipleno) {
        var multiples = [allNumbers];
        for (var i = 0; i < allNumbers.length; i++) {
            if (allNumbers[i] % multipleno === 0) {
                multiples.push(allNumbers[i]);
            }
        }
        return multiples;
    }

    const [multipleList, setMultipleList] = useState([]);

    useEffect((multipleList) => {
        console.log(`render! ${multipleList}`);
    });

    function handleOnClick(event, number) {
        event.preventDefault();
        setMultipleList(multipleFinder(number));
    }

    function handleStyle(number) {
        return multipleList.includes(number) ?
            'multiple' : 'box';
    }

    function renderMultipleList() {

        return allNumbers.map(number => (
            <div
                className={handleStyle(number)}
                key={number.toString()}
                onClick={(e) => handleOnClick(e, number)}
            >
                {number}
            </div>
        ))
    }

    return (
        <div>
            <div className="wrapper">
                {renderMultipleList()}
            </div>
            <div>
            </div>
        </div>
    )
}

export default MultipleList;