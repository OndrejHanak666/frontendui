/**
 * A component for displaying the `scalar` attribute of an plan entity.
 *
 * This component checks if the `scalar` attribute exists on the `plan` object. If `scalar` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `scalar` attribute.
 *
 * @component
 * @param {Object} props - The props for the PlanScalarAttribute component.
 * @param {Object} props.plan - The object representing the plan entity.
 * @param {*} [props.plan.scalar] - The scalar attribute of the plan entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `scalar` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const planEntity = { scalar: { id: 1, name: "Sample Scalar" } };
 *
 * <PlanScalarAttribute plan={planEntity} />
 */
export const PlanScalarAttribute = ({plan}) => {
    const {scalar} = plan
    if (typeof scalar === 'undefined') return null
    return (
        <>
            Probably {'<ScalarMediumCard scalar=\{scalar\} />'} <br />
            {JSON.stringify(scalar)}
        </>
    )
}