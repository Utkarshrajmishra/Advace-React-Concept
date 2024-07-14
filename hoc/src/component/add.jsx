import hoc from "./hoc"

const add = ({money, handleUpdate})=>{
    return(
        <div>
        <h1>{money}</h1> 
        <button onClick={handleUpdate}>Increase Money</button>
        </div>
    )
}

export default hoc(add);