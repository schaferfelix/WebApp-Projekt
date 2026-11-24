import { Link } from 'react-router-dom';
import type { ListItem } from '../types/list';

export default function ListsGrid({ lists, showPublicToggle = false, onTogglePublic }: {
  lists: ListItem[]; showPublicToggle?: boolean; onTogglePublic?: (id: number) => void; }) {

  return (
    <ul className="lists-display">
      {lists.map((list) => (
        <li key={list.id} className="list-element">
          <h3>
            <Link to={`/list/${list.id}`}>{list.name}</Link>
          </h3>

          {showPublicToggle && (
            <button
              type="button"
              className="make-list-public-button"
              onClick={() => onTogglePublic?.(list.id)}
            >
              {list.public ? 'PUBLIC' : 'MAKE PUBLIC'}
            </button>
          )}
        </li>
      ))}
    </ul>
  );
}