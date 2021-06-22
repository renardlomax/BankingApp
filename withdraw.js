function Withdraw(){
  const [show, setShow] = React.useState(true);
  const [total, setTotal] = React.useState(100);
  const [withdraw, setWithdraw] = React.useState('');
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext); 

  function balance(){
     if (withdraw.includes('-')){
       let new_withdraw = withdraw.slice(1, withdraw.length);
       if (!(/^\d+$/.test(new_withdraw))){
        alert('Only enter numbers');
        return;
      }
     } else {
      if (!(/^\d+$/.test(withdraw))){
        alert('Only enter numbers');
        return;
      }
     }
     if (Number(withdraw) < 0) {
       alert('Only enter positive numbers');
       return
     } 
     if (Number(withdraw) > total) {
      alert('Insufficient funds');
      return
    } 
     setTotal(total - Number(withdraw))
     setStatus('Your withdrawal was successful.')
     setTimeout(() => setStatus(''),3000);
  } 
  return (
   
    <div className="text-center">
    <Card
    header="Account"
    bgcolor="danger"
    header="Login"
    status={status}
    body={  (
       <>
      <div><h3>
        
        Balance: ${total}
        </h3></div>
      
      
      <br/>
       Withdraw:
       <input autoComplete="off" type="text" className="form-control" id="withdraw" placeholder="Enter Amount" value={withdraw} onChange={e => setWithdraw(e.currentTarget.value)} /><br/>
      <button type="submit" className="btn btn-light" id='withdraw-button' onClick={balance} disabled={!withdraw}>Withdraw</button>
      </> 
    )} 
    
    
      
      
    />
  </div>
  )
}
