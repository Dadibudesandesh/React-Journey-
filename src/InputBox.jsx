function InputBox({setText}){
    return(
        <input type="text" onChange={(e)=>setText(e.target.value)} placeholder="Type Something.." />
    )
}

export default InputBox;