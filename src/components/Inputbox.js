const Inputbox = (props) => {
    const performtask = () => {
        const newObj = { amount: props.amount, category: props.category };
        const newTransaction = [newObj, ...props.transaction]
        
        props.setTransaction(newTransaction);
    }
    return (
        <div>
            <h1>BUDGET TRACKER</h1>
            <input type="number" id="Input-box" placeholder="Enter Amount" onChange={(event) => { props.setAmount(event.target.value) }} />
            <br /><br />
            <input type="radio" name="category" onChange={() => { props.setCategory("EXPENSE") }} /> <label>EXEPENSE</label>
            <input type="radio" name="category" onChange={() => { props.setCategory("SAVING") }} /><label>SAVING</label> <br /><br />
            <button onClick={performtask}>Submit</button>
        </div>
    );
}

export default Inputbox;