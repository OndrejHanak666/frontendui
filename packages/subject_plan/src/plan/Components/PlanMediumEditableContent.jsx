import { Input } from "@hrbolek/uoisfrontend-shared"

/**
 * A component that displays medium-level content for an plan entity.
 *
 * This component renders a label "PlanMediumContent" followed by a serialized representation of the `plan` object
 * and any additional child content. It is designed to handle and display information about an plan entity object.
 *
 * @component
 * @param {Object} props - The properties for the PlanMediumContent component.
 * @param {Object} props.plan - The object representing the plan entity.
 * @param {string|number} props.plan.id - The unique identifier for the plan entity.
 * @param {string} props.plan.name - The name or label of the plan entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render after the serialized `plan` object.
 *
 * @returns {JSX.Element} A JSX element displaying the entity's details and optional content.
 *
 * @example
 * // Example usage:
 * const planEntity = { id: 123, name: "Sample Entity" };
 * 
 * <PlanMediumContent plan={planEntity}>
 *   <p>Additional information about the entity.</p>
 * </PlanMediumContent>
 */
export const PlanMediumEditableContent = ({plan, onChange=(e)=>null, onBlur=(e)=>null, children}) => {
    return (
        <>           
            <Input id={"name"} label={"Název"} className="form-control" defaultValue={plan?.name|| "Název"} onChange={onChange} onBlur={onBlur} />
            <Input id={"name_en"} label={"Anglický název"} className="form-control" defaultValue={plan?.name_en|| "Anglický název"} onChange={onChange} onBlur={onBlur} />
            {children}
        </>
    )
}
