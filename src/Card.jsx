function Card({title,children}){
    return(
        <div style={{border:'1px solid black' , padding:'10px'}}>
            <h3>{title}</h3>
            <div>{children}</div>
        </div>
    );
}

export default Card;