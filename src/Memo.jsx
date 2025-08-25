import {memo} from "react";

function MemoContent(){


    console.log('render');
    return (
        <h2>Hello anh em F8</h2>
    )
}

export default memo(MemoContent)