import './NewListView.css'

function NewListView() {
    return (
        <>
            <section id="new-list">
                <h2>Create New List</h2>
                <form id="new-list-form">
                    <div className="form-group">
                        <label htmlFor="list-name">List Name:</label>
                        <input type="text" id="list-name" name="list-name" required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="list-public">make public?:</label>
                        <input type="checkbox" id="list-public" name="list-public" />
                    </div>
                    <button type="button" className="create-criteria-button">NEW CRITERIA</button>
                    <button className="submit-list-creation-button" type="submit">CREATE LIST</button>
                </form>
            </section>
        </>
    );
}

export default NewListView