import React, {useEffect, useRef, useState} from 'react';
import styles from './LastestCounter.module.css';

const LastestCounter = () => {

    const [count, setCount] = useState(0);

    const addCount = () => setCount(count + 1);

    const countRef = useRef(count);

    useEffect(() => {
        // here we get the count & put in countRef
        countRef.current = count;
        setTimeout(() => {
            console.log("count " + count)
            console.log("countRef " + countRef.current)
        }, 2000)
    }, [count]);

    return (
        <>
            <p className={styles.text}>click count is {count}</p>
            <button className={styles.btn} onClick={addCount}>Click !</button>
        </>
    );
};

export default LastestCounter