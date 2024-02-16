import { useState } from 'react';
import c from './Paginator.module.css';

const Paginator = ({onChangeCurrentPage, currentPage, totalItemsCount, portionSize = 10}) => {
    const pageCount = Math.ceil(totalItemsCount / portionSize);
    const pages = []
    for (let i = 1; i <= pageCount; i++) {
        pages.push(i)
    }

    let portionCount = Math.ceil(pageCount / portionSize)
    let [portionNumber, setPortionNumber] = useState(1)
    let leftPortionPageNumber = (portionNumber - 1) * portionSize + 1
    let rightPortionPageNumber = portionNumber * portionSize


    return (
        <div className={c.paginator_wrapper}>
            {portionCount > 1 &&
                <button onClick={()=>{setPortionNumber(portionNumber - 1)}}>prev</button>}
            {pages
                .filter(p => p >= leftPortionPageNumber && p <= rightPortionPageNumber)
                .map(p => {
                return (
                    <span
                        key={p}
                        className={currentPage === p ? c.selected : null}
                        onClick={() => { onChangeCurrentPage(p) }}>{p}
                    </span>
                )
            })}
            {portionCount > portionNumber &&
                <button onClick={()=>{setPortionNumber(portionNumber + 1)}}>next</button>}
        </div>
    )};

export default Paginator;