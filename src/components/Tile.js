import './Tile.css'
const Tile = (props) => {
    const deleteTransaction = () => {
        const newTransactions = props.transactions.filter((item, id) => {
            if (id === props.index) {
                return false;
            }
            else {
                return true;
            }
        })
        props.setTransaction(newTransactions);
    }
    const updateTransaction = () => {
        const newAmount = prompt("Please Enter Amount to Update")
        // console.log(newAmount)
        const newTransactions = props.transactions.map((item,id)=>{
            if(props.index === id){
                return {...item,newAmount}
            }
            else{
                return item;
            }
        })
        props.setTransaction(newTransactions)
    }
    return (
        <div className="Tile">

            <h2>AMOUNT = Rs.{props.transaction.amount}/- {props.transaction.category}</h2>
            <button className="delete" onClick={deleteTransaction}>Delete transaction</button>
            <button className="update" onClick={updateTransaction}>Update transaction</button>
        </div>

    );
}
export default Tile