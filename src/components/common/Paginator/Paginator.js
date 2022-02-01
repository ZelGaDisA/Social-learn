import React, { useState } from "react";
import styles from "./Paginator.module.css"
import cn  from "classnames";

const Paginator = ({ totalItemsCount, pageSize, currentPage, onPageChanged, portionSize = 10 }) => {

    const pagesCount = Math.ceil(totalItemsCount / pageSize)

    const pages = []
    for (let i = 1; i <= pagesCount; i++) {
        pages.push(i)
    }

    const portionCount = Math.ceil(pagesCount / portionSize)
    const [portionNumber, setPortionNumber] = useState(1)
    const leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    const rightPortionNumber = portionNumber * portionSize

    return (
        <div className={styles.paginator}>
            {portionNumber > 1 &&
            <button onClick={() => { setPortionNumber(portionNumber - 1) }} >PREV</button>}

            {pages.filter(p => p >= leftPortionPageNumber && p <= rightPortionNumber)
                .map( p => {
                    return <span className={ cn({
                        [styles.selectedPage] : currentPage === p
                    }, styles.pageNumber) }
                                 key={p}
                                 onClick={ (e) => {
                                     onPageChanged(p)
                                 }}>{p}</span>
                })}
            { portionCount > portionNumber &&
            <button onClick={() => { setPortionNumber(portionNumber + 1) }}>NEXT</button> }
        </div>
    )
}

export default Paginator