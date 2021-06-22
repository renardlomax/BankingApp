function CreateAccount(){
  const [show, setShow]         = React.useState(true);
  const [status, setStatus]     = React.useState('');
  const [name, setName]         = React.useState('');
  const [email, setEmail]       = React.useState('');
  const [password, setPassword] = React.useState('');
  const ctx = React.useContext(UserContext);  
  
  function validate(field, label){
    if (!field) {
        setStatus('Error: ' + label);
        setTimeout(() => setStatus(''),3000);
        return false;
      }
      return true;
  }

  function handleCreate(){
    if (!validate(name,     'name has to be entered')) return;
    if (!validate(email,    'email has to be entered')) return;
    if (!validate(password, 'password has to be entered')) return;
    if (password.length < 8) {
      setStatus('Error: The password you entered is too short. Please enter at least 8 characters.')
      setTimeout(() => setStatus(''),3000);
      return;
    }
    if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
      setStatus('Error:  Please enter a valid email adress that inclueds "@" and ".".')
      setTimeout(() => setStatus(''),3000);
      return;
    }
    ctx.users.push({name,email,password,balance:100});
    setShow(false);
  }    

  function clearForm(){
    setName('');
    setEmail('');
    setPassword('');
    setShow(true);
  }

  return (
    
    <div id="form" className="text-center">
      
        <Card
      bgcolor="danger"
      header="Create Account"
      footer="Thanks"
      status={status}
      body={show ? (  
              <>
              Name<br/>
              <input autoComplete="off" type="text" className="form-control" id="name" placeholder="Enter name" value={name}  onChange={e => setName(e.currentTarget.value)} /><br/>
              Email address<br/>
              <input autoComplete="off" type="input" className="form-control" id="email" placeholder="Enter email" value={email} onChange={e => setEmail(e.currentTarget.value)}/><br/>
              Password<br/>
              <input type="password" className="form-control" id="password" placeholder="Enter password" value={password} onChange={e => setPassword(e.currentTarget.value)}/><br/>
              <button  type="submit" id="create-account" className="btn btn-light" onClick={handleCreate} disabled={!name && !password && !email}>Create Account</button>
              </>
            ):(
              <>
              <h5>You successfully created an account.</h5>
              <button type="submit" className="btn btn-light" onClick={clearForm}>Add another account</button>
              </>
            )}
    />
    </div>
    
  )
}