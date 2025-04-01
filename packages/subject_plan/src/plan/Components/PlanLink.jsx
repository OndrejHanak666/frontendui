import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

export const PlanURI = '/plan/plan/view/';

/**
 * A React component that renders a `ProxyLink` to an "plan" entity's view page.
 *
 * The target URL is dynamically constructed using the `plan` object's `id`, and the link displays
 * the `plan` object's `name` as its clickable content.
 *
 * @function PlanLink
 * @param {Object} props - The properties for the `PlanLink` component.
 * @param {Object} props.plan - The object representing the "plan" entity.
 * @param {string|number} props.plan.id - The unique identifier for the "plan" entity. Used to construct the target URL.
 * @param {string} props.plan.name - The display name for the "plan" entity. Used as the link text.
 *
 * @returns {JSX.Element} A `ProxyLink` component linking to the specified "plan" entity's view page.
 *
 * @example
 * // Example usage with a sample plan entity:
 * const planEntity = { id: 123, name: "Example Plan Entity" };
 * 
 * <PlanLink plan={planEntity} />
 * // Renders: <ProxyLink to="/plan/plan/view/123">Example Plan Entity</ProxyLink>
 *
 * @remarks
 * - This component utilizes `ProxyLink` to ensure consistent link behavior, including parameter preservation and conditional reloads.
 * - The URL format `/plan/plan/view/:id` must be supported by the application routing.
 *
 * @see ProxyLink - The base component used for rendering the link.
 */
export const PlanLink = ({plan}) => {
    return <ProxyLink to={PlanURI + plan.id}>{plan.name}</ProxyLink>
}