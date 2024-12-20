import { PersonFill } from "react-bootstrap-icons"
import { requestLink } from "./requestLink"
import { requestCardCapsule } from "./requestCardCapsule"
import { requestMediumContent } from "./requestMediumContent"

/**
 * A card component that displays detailed content for an request entity.
 *
 * This component combines `requestCardCapsule` and `requestMediumContent` to create a card layout
 * with a title and medium-level content. The title includes a `PersonFill` icon and a link to
 * the request entity's details, while the body displays serialized details of the entity along
 * with any additional children passed to the component.
 *
 * @component
 * @param {Object} props - The properties for the requestMediumCard component.
 * @param {Object} props.request - The object representing the request entity.
 * @param {string|number} props.request.id - The unique identifier for the request entity.
 * @param {string} props.request.name - The name or label of the request entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render inside the card body.
 *
 * @returns {JSX.Element} A JSX element combining a card with a title and detailed content.
 *
 * @example
 * // Example usage:
 * const requestEntity = { id: 123, name: "Sample Entity" };
 * 
 * <requestMediumCard request={requestEntity}>
 *   <p>Additional details or actions for the entity.</p>
 * </requestMediumCard>
 */
export const requestMediumCard = ({request, children}) => {
    return (
        <requestCardCapsule title={<><PersonFill /> <requestLink request={request} /></>}>
            <requestMediumContent request={request}>
                {children}
            </requestMediumContent>
        </requestCardCapsule>
    )
}
