const hoc=(component)=>{
    const auth=true;
    return function(props){
        if(auth){
            <component {...props} />
        }
        return <p>Please login to Access</p>
    }
}