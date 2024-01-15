const SignUp = () => {
    return (
       <form onSubmit={(e)=>{
        console.log('Form reload');
        e.preventDefault()
        
       }}>
        <input type="email" name="Email" id="" />
        <input type="submit" value="Submit" />
       </form>
    );
};

export default SignUp;