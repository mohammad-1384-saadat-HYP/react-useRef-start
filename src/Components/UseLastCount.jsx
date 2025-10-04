import React, {useEffect, useRef, useState} from 'react';
import styles from './UseLastCount.module.css';

const UseLastCount = () => {

    const [count, setCount] = useState(0);
    const countHolder = useRef(count);
    useEffect(() => {
        countHolder.current = count
    }, [count]);

    const addCount = (num) => setCount(countHolder.current + num);

    return (
        <div className={styles.container}>
            <p className={styles.text}>click count is {count}</p>
            <div className={styles.btnHolder}>
                <button className={styles.btn} onClick={() => addCount(1)}>Add 1</button>
                <button className={styles.btn} onClick={() => addCount(2)}>Add 2</button>
                <button className={styles.btn} onClick={() => addCount(3)}>Add 3</button>
            </div>
        </div>
    );
};

export default UseLastCount