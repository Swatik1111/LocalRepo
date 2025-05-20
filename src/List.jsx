
import './App.css';


function List(props) {


    const ItemLists = props.items
    const listItems = ItemLists.map((item) => <li key={item.id}>{item.name}  &nbsp; <b>{item.calories}</b></li>)

    return (<div className="fruitsList">
        <p className="list-category">Category</p>

        <ul className="list-items">{listItems}</ul>

    </div>);



}

List.defaultProps = {
    category: "Category",
    items: [],
}
export default List