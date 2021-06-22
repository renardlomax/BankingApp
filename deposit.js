function Deposit(){
  const [show, setShow] = React.useState(true);
  const [total, setTotal] = React.useState(100);
  const [deposit, setDeposit] = React.useState('');
  const [status, setStatus] = React.useState('');
  const ctx = React.useContext(UserContext); 

  function balance(){
     if (deposit.includes('-') || deposit.includes('.')){
       let new_deposit = deposit.replace('-', '');
       new_deposit = new_deposit.replace('.', '');
       if (!(/^\d+$/.test(new_deposit))){
        alert('Only enter numbers');
        return;
      }
     } else {
      if (!(/^\d+$/.test(deposit))){
        alert('Only enter numbers');
        return;
      }
     }
     if (Number(deposit) < 0) {
       alert('Only enter positive numbers');
       return
     } 
     setTotal(total + Number(deposit))
     setStatus('Your deposit was successful.')
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
       Deposit:
       <input autoComplete="off" type="text" className="form-control" id="deposit" placeholder="Enter Amount" value={deposit} onChange={e => setDeposit(e.currentTarget.value)} /><br/>
      <button type="submit" className="btn btn-light" id='deposit-button' onClick={balance} disabled={!deposit}>Deposit</button>
      </> 
    )} 
    
    
      
      
    />
  </div>
  )
}
