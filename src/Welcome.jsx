function Welcome({isLoggedIn}){


    // using the if-else statement
        
        // if(isLoggedIn){
        //     return <h2>Welcome Back !</h2>
        // }else{
        //     return <h2>Please Log In..</h2>
        // }

    // Using Ternary Operator 
        return <h2>{isLoggedIn ? 'Welcome Back' : 'Log In First'}</h2>;
}

export default Welcome;