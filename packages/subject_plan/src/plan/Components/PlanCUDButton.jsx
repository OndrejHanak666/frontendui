import { ButtonWithDialog, ErrorHandler, LoadingSpinner } from "@hrbolek/uoisfrontend-shared";
// import { InsertPlanButton } from "./CUDButtons/InsertPlanButton";
// import { UpdatePlanButton } from "./CUDButtons/UpdatePlanButton";
// import { DeletePlanButton } from "./CUDButtons/DeletePlanButton";
import { useAsyncAction } from "@hrbolek/uoisfrontend-gql-shared";

/**
 * PlanCUDButton Component
 *
 * A higher-order component that dynamically renders one of the following components
 * based on the `operation` prop:
 * - `InsertPlanButton` for creating a new item (operation "C")
 * - `UpdatePlanButton` for updating an existing item (operation "U")
 * - `DeletePlanButton` for deleting an existing item (operation "D")
 *
 * This component validates the `plan` prop:
 * - For "C" (create), `plan` can be any object (no restrictions).
 * - For "U" (update) and "D" (delete), `plan` must include an `id` key.
 *
 * If the `operation` prop is invalid or required conditions for `plan` are not met,
 * an `ErrorHandler` component is rendered with an appropriate error message.
 *
 * @component
 * @param {Object} props - The props for the PlanCUDButton component.
 * @param {string} props.operation - The operation type ("C" for create, "U" for update, "D" for delete).
 * @param {React.ReactNode} props.children - The content or label for the button.
 * @param {Object} props.plan - The parameters for the operation. For "U" and "D", it must include an `id` key.
 * @param {string} [props.plan.id] - The unique identifier for the item (required for "U" and "D").
 * @param {string} [props.plan.name] - The name of the item (optional).
 * @param {string} [props.plan.name_en] - The English name of the item (optional).
 * @param {Function} [props.onDone=(plan) => {}] - Callback executed after the operation completes. Receives the `plan` object.
 * @param {...Object} props - Additional props passed to the underlying button components.
 *
 * @example
 * // Example Usage
 * const Example = () => {
 *   const handleDone = (data) => console.log("Operation completed:", data);
 *
 *   return (
 *     <>
 *       <PlanCUDButton
 *         operation="C"
 *         plan={{ name: "New Item", name_en: "New Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Insert
 *       </PlanCUDButton>
 *
 *       <PlanCUDButton
 *         operation="U"
 *         plan={{ id: "123", name: "Updated Item", name_en: "Updated Item EN" }}
 *         onDone={handleDone}
 *       >
 *         Update
 *       </PlanCUDButton>
 *
 *       <PlanCUDButton
 *         operation="D"
 *         plan={{ id: "123" }}
 *         onDone={handleDone}
 *       >
 *         Delete
 *       </PlanCUDButton>
 *     </>
 *   );
 * };
 *
 * @returns {JSX.Element} The dynamically selected button component for the specified operation.
 */
export const PlanButton = ({ operation, children, plan, onDone = () => {}, ...props }) => {
    const operationConfig = {
        C: {
            asyncAction: PlanInsertAsyncAction,
            dialogTitle: "Vložit novou plan",
            loadingMsg: "Vkládám novou plan",
            renderContent: () => <PlanMediumEditableContent plan={plan} />,
        },
        U: {
            asyncAction: PlanUpdateAsyncAction,
            dialogTitle: "Upravit plan",
            loadingMsg: "Ukládám plan",
            renderContent: () => <PlanMediumEditableContent plan={plan} />,
        },
        D: {
            asyncAction: PlanDeleteAsyncAction,
            dialogTitle: "Chcete odebrat plan?",
            loadingMsg: "Odstraňuji plan",
            renderContent: () => (
                <h2>
                    {plan?.name} ({plan?.name_en})
                </h2>
            ),
        },
    };

    if (!operationConfig[operation]) {
        return <ErrorHandler errors={`Invalid operation value: '${operation}'. Must be one of 'C', 'U', or 'D'.`} />;
    }

    const { asyncAction, dialogTitle, loadingMsg, renderContent } = operationConfig[operation];

    const { error, loading, fetch, entity } = useAsyncAction(asyncAction, plan, { deferred: true });
    const handleClick = async (params = {}) => {
        const fetchParams = { ...plan, ...params };
        const freshPlan = await fetch(fetchParams);
        onDone(freshPlan); // Pass the result to the external callback
    };

    // Validate required fields for "U" and "D"
    if ((operation === 'U' || operation === 'D') && !plan?.id) {
        return <ErrorHandler errors={`For '${operation}' operation, 'plan' must include an 'id' key.`} />;
    }

    return (<>
        {error && <ErrorHandler errors={error} />}
        {loading && <LoadingSpinner text={loadingMsg} />}
        <ButtonWithDialog
            buttonLabel={children}
            dialogTitle={dialogTitle}
            {...props}
            params={plan}
            onClick={handleClick}
        >
            {renderContent()}
        </ButtonWithDialog>
    </>);
};

// // Prop validation using PropTypes
// PlanCUDButton.propTypes = {
//     /** The operation to perform: "C" for create, "U" for update, "D" for delete. */
//     operation: PropTypes.oneOf(['C', 'U', 'D']).isRequired,
//     /** The label or content for the button. */
//     children: PropTypes.node,
//     /** The parameters for the operation. */
//     plan: PropTypes.shape({
//         id: PropTypes.string, // Required for "U" and "D" operations
//         name: PropTypes.string,
//         name_en: PropTypes.string,
//     }).isRequired,
//     /** Callback executed after the operation completes. Receives the `plan` object. */
//     onDone: PropTypes.func,
// };

// // Default props
// PlanCUDButton.defaultProps = {
//     onDone: () => {},
// };