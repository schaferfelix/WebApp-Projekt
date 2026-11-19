import type { ListItem, ListEntry } from '../types/list';

function ListTable({list}: { list: ListItem | undefined }) {
    if(!list) {
        return (
            <p>Loading...</p>
        );
    } else {
        return (
            <section id="list-table">
                <h2 id="list-title">{list.name}</h2>
                <table className="list-table">
                    <thead className="list-table-head">
                        <tr>
                        </tr>
                    </thead>
                    <tbody className="list-table-body"></tbody>
                </table>
            </section>
        );
    }
}

export default ListTable