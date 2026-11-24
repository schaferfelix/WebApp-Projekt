import type { ListItem} from '../types/list';

function ListTable({list}: { list: ListItem | undefined }) {
    if(!list) {
        return (
            <p>Loading...</p>
        );
    }

    const entryKeys = list.entries.length > 0
    ? Object.keys(list.entries[0]).filter((k) => k !== 'id')
    : [];

    return (
        <section id="list-table">
            <h2 id="list-title">{list.name}</h2>
            <table className="list-table">
                <thead className="list-table-head">
                    <tr>
                        {entryKeys.map((key) => (
                        <th key={key}>{key.replaceAll('-', ' ')}</th>
                        ))}
                        {/* Empty cell for edit button*/}
                        <th></th>
                    </tr>
                </thead>
                <tbody className="list-table-body">
                    {list.entries.map((entry) => (
                        <tr key={entry.id}>
                        {entryKeys.map((key) => (
                            <td key={key}>{entry[key]}</td>
                        ))}
                            <td>
                                <button
                                type="button"
                                className="edit-list-entry-button"
                                onClick={() => console.log('Edit entry:', entry.id)}
                                >
                                    edit
                                </button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </section>
    );
}

export default ListTable