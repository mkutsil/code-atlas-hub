import classes from './GridTable.module.scss';
import { tableData } from './tableData';

const GridTable = () => (
    <>
        <h1>Table</h1>

        <div className={classes.gridContainer}>
            {tableData.headers.map((tableItem, index) => (
                <div key={index} className={classes.headerGrid}>
                    {tableItem}
                </div>
            ))}
            {tableData.rows.flatMap(row =>
                row.map((cell, colIndex) => <div key={`${cell} - ${colIndex}`}>{cell}</div>)
            )}
        </div>
    </>
);

export default GridTable;
