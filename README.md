https://github.com/schaferfelix/WebApp-Projekt

# WebApp-Projekt
Projekt für die Vorlesung Webapplikationen. 
Eine Oberfläche die es ermöglicht, sehr individualistierte Listen zu erstellen und verwalten. Es können eigene custom Kategorien in jeder Liste festlgelegt werden und somit Dinge aller Art auf die Art geranked werden, die den jeweiligen Nutzer wirklich interessiert.

## Tech-Stack

- **React** mit **TypeScript**
- **Vite** als Build-Tool und Dev-Server
- **React Router (`react-router-dom`)** für clientseitiges Routing

## Installation & Start

1. Repository klonen oder Projektordner öffnen
2. Abhängigkeiten installieren und Entwicklungsserver starten:

```bash
npm install && npm run dev
```

## M2 Kriterien:
| Kriterium | Datei | Zeile / Hinweis |
|---|---|---|
| Tooling (npm, Vite & aktives TypeScript) | `package.json`, `README.md`, `src/types/list.ts` | Vite-Setup & `npm install && npm run dev` dokumentiert; eigene Typen (`ListItem`, `ListEntry`, `Criterion`) aktiv für State & Props genutzt |
| Komponenten & Daten über Props | `src/components/Header.tsx`, `Footer.tsx`, `ListsGrid.tsx`, `ListTable.tsx`, `CriterionGroup.tsx`, `FeaturedLists.tsx` | Modulare Zerlegung in Layout-, UI- und Page-Komponenten; Daten- und Callback-Übergabe per Props (`lists`, `list`, `criterion`, `createList`, `togglePublicPrivate`) |
| State und Hooks (`useState`, `useEffect`) | `src/App.tsx`, `src/pages/NewListView.tsx`, `src/components/Header.tsx` | `useEffect` zum initialen Laden aus `public/ListsData.json` & `localStorage`; `useState` für Listen-Zustand, Formulareingaben und dynamische Kriterien |
| Durchgängige Nutzeraktion (Formular → Liste & Filter) | `src/pages/NewListView.tsx`, `src/pages/AccountView.tsx`, `src/pages/SearchResultsView.tsx` | 1) Neue Liste mit Kriterien erstellen → Speicherung im State/`localStorage` → Anzeige in `AccountView` & `ListView`; 2) Suchanfrage im Header (`?q=`) → Filterung in `SearchResultsView`; 3) Public-Toggle |
| Routing (mindestens 3 Routen) | `src/App.tsx`, `src/pages/ListDetail.tsx`, `src/pages/SearchResultsView.tsx` | `react-router-dom` mit 6 Routen (`/`, `/account`, `/list/:id`, `/new-list`, `/search`, `/sign-in`), dynamische Parameter (`useParams`, `useSearchParams`) & Navigation (`Link`, `useNavigate`) |