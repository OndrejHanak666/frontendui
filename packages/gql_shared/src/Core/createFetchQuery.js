import { authorizedFetch2 } from "./fetch";
import { createPayload } from './createPayload'
/**
 * Creates a fetch function for a given GraphQL query string. The resulting function
 * accepts query variables, constructs the request payload, and initiates the fetch request.
 *
 * @param {string} query - The GraphQL query string. Must be a valid, non-empty string.
 * @param {Object} [params={}] - Additional parameters to customize the fetch request.
 * @param {Object} [params.headers] - Custom headers to include in the fetch request. Can be used for authentication tokens.
 * @param {string} [params.method='POST'] - HTTP method for the request (defaults to POST).
 * @param {*} [params.body] - Custom body content (overwritten by the query payload).
 *
 * @returns {Function} A function that takes an object of query variables and returns a Promise from the fetch request.
 *
 * @throws {Error} If the `query` is not a valid non-empty string.
 *
 * @example
 * // Define a GraphQL query
 * const query = `
 *   query GetUser($id: ID!) {
 *     user(id: $id) {
 *       id
 *       name
 *       email
 *     }
 *   }
 * `;
 *
 * // Create a fetch function
 * const fetchUser = CreateFetchQuery(query, {
 *   headers: {
 *     Authorization: 'Bearer some-token'
 *   }
 * });
 *
 * // Use the fetch function with query variables
 * fetchUser({ id: '12345' })
 *   .then(response => console.log(response))
 *   .catch(err => console.error(err));
 */
export const createFetchQuery = (query, params = {}) => async (query_variables) => {
    if (!query || typeof query !== 'string') {
        throw new Error('Invalid query: must be a non-empty string.');
    }

    // Default fetch parameters
    const defaultParams = {
        method: 'POST',
        headers: {
            'Content-Type': 'application/json',
        },
    };

    const body = JSON.stringify(createPayload(query, query_variables));
    try {
        const result = await authorizedFetch2('', { body, ...defaultParams, ...params });
        return result;
    } catch (error) {
        console.error("createAsyncGraphQLAction: Error during async action execution", error);
        throw error;
    }    
};
