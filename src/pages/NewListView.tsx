import { useState, type SyntheticEvent } from 'react';
import { useNavigate } from 'react-router-dom'
import './NewListView.css'

import type { Criterion, ListItem } from '../types/list';
import CriterionGroup from '../components/CriterionGroup';

function NewListView({ createList }: {createList: (newList: ListItem) => void}) {
    const [name, setName] = useState('');
    const [isPublic, setIsPublic] = useState(false);
    const [criteria, setCriteria] = useState<Criterion[]>([]);
    const [nextId, setNextId] = useState(0);

    const navigate = useNavigate();

    const addCriterion = () => {
        setCriteria((prev) => [
            ...prev,
            { id: nextId, name: '', type: 'rating' },
        ]);
        setNextId((prev) => prev + 1);
    };

    const handleCriterionChange = (id: number, field: 'name' | 'type', value: string) => { 
        setCriteria((prev) =>
            prev.map((c) => (c.id === id ? { ...c, [field]: value } : c))
        );
    };

    const onSubmit = (e: SyntheticEvent<HTMLFormElement>) => {
        e.preventDefault();

        const trimmedName = name.trim();

        const validCriteria = criteria.map((c) => ({ ...c, name: c.name.trim() })).filter((c) => c.name !== '');

        const newList: ListItem = {
            id: Date.now(),
            name: trimmedName,
            public: isPublic,
            creatorId: 1,
            criteria: validCriteria,
            entries: [],
        };

        createList(newList);
        navigate('/account');
    };

    return (
        <>
            <section id="new-list">
                <h2>Create New List</h2>
                <form id="new-list-form" onSubmit={onSubmit}>

                    <div className="form-group">
                        <label htmlFor="list-name">List Name:</label>
                        <input type="text" id="list-name" name="list-name" 
                            value={name} onChange={(e) => setName(e.target.value)} required />
                    </div>
                    <div className="form-group">
                        <label htmlFor="list-public">make public?:</label>
                        <input type="checkbox" id="list-public" name="list-public" 
                            checked={isPublic} onChange={(e) => setIsPublic(e.target.checked)}/>
                    </div>

                    <button type="button" className="create-criteria-button" onClick={addCriterion}>
                        NEW CRITERIA
                    </button>

                    {criteria.map((criterion) => (
                        <CriterionGroup
                            key={criterion.id}
                            criterion={criterion}
                            onChange={handleCriterionChange}
                        />
                    ))}

                    <button className="submit-list-creation-button" type="submit">
                        CREATE LIST
                    </button>

                </form>
            </section>
        </>
    );
}

export default NewListView