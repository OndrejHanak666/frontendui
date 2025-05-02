
import { createAsyncGraphQLAction, useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared';
import { useState } from 'react';

let value = 0;

const QueryGroupAsyncAction = createAsyncGraphQLAction(`query ($pattern: String!){
  groupPage(where: {name :{_ilike: $pattern}}) {
    __typename
    id
    name
  }
}`)

export const UserData = ({}) => {
    const {loading, error, fetch } = useAsyncAction(QueryGroupAsyncAction, {}, {deferred: true});
    
    const [state, setState] = useState(value);
    const onClick = () => {
        value = value + 1;
        const newState = state + 1;
        setState(newState);
    }
    const onChange = (e) => {
        const data = e.target.value;
        if (data.length > 2) {
            fetch({ pattern: `%${data}%` }).then(
                json => {
                    console.log(json)
                    return json
                }
            )
        }
        console.log("UserData.onChange.data", data)
    }
    return (
        <div>
            UserData {value}, {state}
            <button onClick={onClick}>Increment</button><br />
            <input type="text" defaultValue={"demo"} onChange={onChange}/>
        </div>
    )
}


//const UserEmailEdit = ({user}) => {