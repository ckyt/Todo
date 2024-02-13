/* eslint-disable react/prop-types */
 function Item ({todo}){

    return(
        <>
        {todo}
        <button>Edit</button>
        <button>Delete</button>
        </>
    )
 }
    export default Item;