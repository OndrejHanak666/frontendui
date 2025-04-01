import 'bootstrap/dist/css/bootstrap.min.css';

import { AppCanvas, createAsyncGraphQLAction, useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
import { AppRouter } from './AppRouter';





export const App = () => {
    return (
        <AppCanvas>
           <AppRouter />
        </AppCanvas>    
    )
}

