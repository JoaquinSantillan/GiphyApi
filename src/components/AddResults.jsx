import { useState } from "react"
import PropTypes from 'prop-types';


const AddResult = ({setResult})=>{

    const [valueInput,setValueInput] = useState('')

    const handdleInputChange = (e)=>{
        setValueInput(e.target.value)
    }

    const handleSubmit = (e)=>{
        e.preventDefault()
        if(valueInput.trim().length > 2){
            setResult(res=>[valueInput,...res])
        }
    }

    return(
        <form onSubmit={handleSubmit}>
            <input 
            type="text"
            value={valueInput}
            onChange={handdleInputChange}
            />
        </form>
    )
}

AddResult.PropTypes = {
    setResult:PropTypes.func.isRequired
}

export default AddResult