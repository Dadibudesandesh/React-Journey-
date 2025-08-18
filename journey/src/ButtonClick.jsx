function ButtonClick(){
    const handleEvent = ()=>{
        alert('Button was clicked!');
    };

    const withParameter = (name)=>{
        alert(`Hello, ${name}`);
    };
 
    return(
        <div>
             <button onClick={handleEvent}> Click me</button>
             <button onClick= {()=> withParameter('sandesh')}> With Parameter</button>
        </div>
    )

}

export default ButtonClick;