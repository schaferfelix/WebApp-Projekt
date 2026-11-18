import './ListView.css'

function ListView() {
    return (
        <>
            <section id="list-table">
                <h2 id="list-title"></h2>
                <table className="list-table">
                    <thead className="list-table-head">
                        <tr>
                        </tr>
                    </thead>
                    <tbody className="list-table-body"></tbody>
                </table>
            </section>
        </>
    );
}

export default ListView