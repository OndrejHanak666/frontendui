import { PlanURI } from "../Components/PlanLink"
import { PlanPage } from "./PlanPage"

/**
 * A router segment definition for the Plan page.
 *
 * This object defines a route path and its associated React element.
 * The `path` property is constructed using a base URI stored in `PlanURI`
 * and expects an `id` parameter. The `element` property specifies the React
 * component to render when the route matches.
 *
 * @constant {Object} PlanRouterSegment
 * @property {string} path - The URL path pattern for the route, e.g., "/plan/plan/view/:id".
 * @property {JSX.Element} element - The React element (component) to render, in this case, <PlanPage />.
 */
export const PlanRouterSegment = {
    path: `/${PlanURI}/:id`,
    element: <PlanPage />,
}