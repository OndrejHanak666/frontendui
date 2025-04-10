/**
 * A component for displaying the `event` attribute of an studyplan entity.
 *
 * This component checks if the `event` attribute exists on the `studyplan` object. If `event` is undefined,
 * the component returns `null` and renders nothing. Otherwise, it displays a placeholder message
 * and a JSON representation of the `event` attribute.
 *
 * @component
 * @param {Object} props - The props for the StudyplanEventAttribute component.
 * @param {Object} props.studyplan - The object representing the studyplan entity.
 * @param {*} [props.studyplan.event] - The event attribute of the studyplan entity to be displayed, if defined.
 *
 * @returns {JSX.Element|null} A JSX element displaying the `event` attribute or `null` if the attribute is undefined.
 *
 * @example
 * // Example usage:
 * const studyplanEntity = { event: { id: 1, name: "Sample Event" } };
 *
 * <StudyplanEventAttribute studyplan={studyplanEntity} />
 */
export const StudyplanEventAttribute = ({studyplan}) => {
    const {event} = studyplan
    if (typeof event === 'undefined') return null;

    const formatDate = (iso) => new Date(iso).toLocaleString();

    return (
        /*<>
            Probably {'<EventMediumCard event=\{event\} />'} <br />
            {JSON.stringify(event)}
        </>*/
        <div className="mb-2">
            <h5>Termín lekce</h5>
            <p>
                Od: {formatDate(event.startdate)} <br />
                Do: {formatDate(event.enddate)}
            </p>
        </div>

    );
};