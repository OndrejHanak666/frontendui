import { ProxyLink } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that renders a `ProxyLink` to an Role view page.
 * 
 * The target URL is dynamically constructed using the `Role` object's `id`, 
 * and the link displays the `Role` object's `name` as its content.
 * 
 * @component
 * @param {Object} props - The properties for the RoleLink component.
 * @param {Object} props.Role - The object representing the Role entity.
 * @param {string|number} props.Role.id - The unique identifier for the Role entity.
 * @param {string} props.Role.name - The display name for the Role entity.
 * 
 * @returns {JSX.Element} A `ProxyLink` component linking to the Role view page.
 * 
 * @example
 * // Example usage:
 * const RoleEntity = { id: 123, name: "Example Role Entity" };
 * 
 * <RoleLink Role={RoleEntity} />
 */
export const RoleLink = ({Role}) => {
    return <ProxyLink to={'/Role/Role/view/' + Role.id}>{Role.name}</ProxyLink>
}