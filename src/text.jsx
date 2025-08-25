import { memo } from "react";

function Tet({onIncrease}) {
    console.log('re-render');
    return (
        <>
            <h2>Hello Anh em</h2>
            <button onClick={onIncrease}> Click Me</button>
        </>
    )
}

export default memo(Tet)