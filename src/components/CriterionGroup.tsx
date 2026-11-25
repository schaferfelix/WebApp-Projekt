import type { Criterion, CriterionType } from '../types/list';

export default function CriterionGroup({ criterion, onChange }: 
    { criterion: Criterion; onChange: (id: number, field: 'name' | 'type', value: string) => void;}) {

    return (
        <div className="criterion-group">
            <div className="form-group">
                <label htmlFor={`criterion-name-${criterion.id}`}>Aspect Name:</label>
                <input
                    type="text"
                    id={`criterion-name-${criterion.id}`}
                    name="criterion-name"
                    placeholder="e.g., Music"
                    value={criterion.name}
                    onChange={(e) => onChange(criterion.id, 'name', e.target.value)}
                    required
                />
            </div>

            <div className="form-group">
                <label htmlFor={`criterion-type-${criterion.id}`}>Type:</label>
                <select
                    id={`criterion-type-${criterion.id}`}
                    name="criterion-type"
                    value={criterion.type}
                    onChange={(e) =>
                        onChange(criterion.id, 'type', e.target.value as CriterionType)
                    }
                >
                    <option value="rating">Rating (1–10)</option>
                    <option value="text">Text</option>
                    <option value="checkbox">Checkbox</option>
                </select>
            </div>
        </div>
    );
}