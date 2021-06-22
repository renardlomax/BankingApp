function Login(){
  const [show, setShow]         = React.useState(true);
  const [name, setName]  = React.useState('');
  const [password, setPassword] = React.useState('');
  const [status, setStatus]     = React.useState('');
  const ctx = React.useContext(UserContext);  

  function clearForm(){
    setName('');
    setPassword('');
    setShow(true);
  }
  
  function handleCreate(){
    console.log(name,password);
    if (!validate(name,     'name'))     return;
    if (!validate(password, 'password')) return;
    
    
    setShow(false);
  }    


  function validate(field, label){
    if (!field) {
      setStatus('Error: Please enter a User' + label);
      setTimeout(() => setStatus(''),3000);
      return false;
    }
    let getObjs = ctx.users.filter(obj => obj.name == name)
    
    if(getObjs.length == 0) {
      setStatus('Error: That username can\'t be found');
      setTimeout(() => setStatus(''),3000);
      return false;
    } else {
      if (getObjs[0].password != password) {
        setStatus('Error: That password is incorrect.');
        setTimeout(() => setStatus(''),3000);
        return false;
      }
    }
    return true;
}
  return (
    <div className="text-center">
    <Card
    bgcolor="danger"
    header="Login"
    status={status}
    body={ show ? (
       <>
       Username<br/>
      <input autoComplete="off" type="input" className="form-control" id="name" placeholder="Enter Username" value={name} onChange={e => setName(e.currentTarget.value)}/><br/>
       Password<br/>
      <input type="password" className="form-control" id="password" placeholder="Enter password"value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/><br/>
      
      <button type="submit" className="btn btn-light" onClick={handleCreate}>Login </button>
      </> 
    ):(
      <>
              <h5>Success</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Login Successful</button>
              </>
    )} 
    
    
      
      
    />
  </div>
  )  
}
