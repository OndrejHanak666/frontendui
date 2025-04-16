import { useAsyncAction, createAsyncGraphQLAction } from "@hrbolek/uoisfrontend-gql-shared";
import { StudyplanInsertAsyncAction } from "../Queries/StudyplanInsertAsyncAction";

export const StudyplanManagement = () => {
    const { error, loading, entity, fetch } = useAsyncAction(
      StudyplanInsertAsyncAction,
      {}, // default input
      { deferred: true } // spustí se až po kliknutí
    );
  
    const handleInsert = () => {
      fetch({
        name: "Demo plán PSP",
        name_en: "Demo Plan PSP"
      });
    };
  
    return (
      <div>
        <h3>Vytvoření demo studijního plánu</h3>
        <button onClick={handleInsert} disabled={loading}>Insert</button>
  
        {loading && <p>Načítání...</p>}
        {error && <p style={{ color: "red" }}>Chyba: {error.message}</p>}
        {entity && (
          <>
            <p><strong>Plan vytvořen:</strong> {entity.name}</p>
            <pre>{JSON.stringify(entity, null, 2)}</pre>
          </>
        )}
      </div>
    );
  };