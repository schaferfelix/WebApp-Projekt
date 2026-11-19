import { Link } from 'react-router-dom';

function ListElement({ id, listName }: { id: number, listName: string }) {
    return (
        <li className="list-element">
             <h3>
                <Link to={`/list/${id}}`}>{listName}</Link>
             </h3>
        </li>
    );
}

export default ListElement