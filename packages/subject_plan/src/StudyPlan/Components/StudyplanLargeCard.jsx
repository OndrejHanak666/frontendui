import Row from "react-bootstrap/Row"
import { LeftColumn, MiddleColumn } from "@hrbolek/uoisfrontend-shared"
import { StudyplanCardCapsule } from "./StudyplanCardCapsule"
import { StudyplanMediumCard } from "./StudyplanMediumCard"
import { StudyPlanLessonData } from "./StudyPlanLessonData"
import { StudyPlanLessonDelete } from "./StudyPlanLessonDelete"
import { StudyGroupInsert } from "./StudyGroupInsert"
import { useState } from "react"

/**
 * A large card component for displaying detailed content and layout for an studyplan entity.
 *
 * This component wraps an `StudyplanCardCapsule` with a flexible layout that includes multiple
 * columns. It uses a `Row` layout with a `LeftColumn` for displaying an `StudyplanMediumCard`
 * and a `MiddleColumn` for rendering additional children.
 *
 * @component
 * @param {Object} props - The properties for the StudyplanLargeCard component.
 * @param {Object} props.studyplan - The object representing the studyplan entity.
 * @param {string|number} props.studyplan.id - The unique identifier for the studyplan entity.
 * @param {string} props.studyplan.name - The name or label of the studyplan entity.
 * @param {React.ReactNode} [props.children=null] - Additional content to render in the middle column.
 *
 * @returns {JSX.Element} A JSX element combining a large card layout with dynamic content.
 *
 * @example
 * // Example usage:
 * const studyplanEntity = { id: 123, name: "Sample Entity" };
 * 
 * <StudyplanLargeCard studyplan={studyplanEntity}>
 *   <p>Additional content for the middle column.</p>
 * </StudyplanLargeCard>
 */
/*export const StudyplanLargeCard = ({studyplan, children}) => {
    return (
        <StudyplanCardCapsule studyplan={studyplan} >
            <Row>
                <LeftColumn>
                    <StudyplanMediumCard studyplan={studyplan}/>
                </LeftColumn>
                <MiddleColumn>
                <h3>Obsah studijního plánu</h3>

                <ul>
                    <StudyPlanLessonData />
                    {studyplan.lessons && studyplan.lessons.length > 0 ? (
                    studyplan.lessons.map((lesson, index) => (
                    <li key={index}>{lesson.name || `Lekce #${index + 1}`}</li>   // nahradit za StudyplanLessonsAtribute
                ))
                ) : (
                    <p>Žádné lekce</p>
                )}
                </ul>

                    <pre>{JSON.stringify(studyplan, null, 2)}</pre>
                    {children}
                </MiddleColumn>
            </Row>
        </StudyplanCardCapsule>
    )
}*/

export const StudyplanLargeCard = ({ studyplan, children, onChange, onBlur }) => {
    const [expandedLessonIndex, setExpandedLessonIndex] = useState(null);

    const toggleLesson = (index) => {
        setExpandedLessonIndex(prevIndex => prevIndex === index ? null : index);
    };

    return (
        <StudyplanCardCapsule studyplan={studyplan}>
            <Row>
                <LeftColumn>
                    <StudyplanMediumCard studyplan={studyplan} />
                </LeftColumn>
                <MiddleColumn>
                    <h3>Obsah studijního plánu</h3>
                    <StudyPlanLessonData />

                    {studyplan.lessons && studyplan.lessons.length > 0 ? (
                        <ul className="list-group">
                            {studyplan.lessons.map((lesson, index) => (   
                                <li key={lesson.id} className="list-group-item">
                                    <div 
                                        style={{ cursor: "pointer", fontWeight: "bold" }} 
                                        onClick={() => toggleLesson(index)}
                                    >
                                        {lesson.name || `Lekce #${index + 1}`}
                                        <StudyPlanLessonDelete lesson={lesson} onDeleted={()=>onBlur({target:{value:studyplan}})} />
                                    </div>
                                    {expandedLessonIndex === index && (
                                        <div style={{ marginTop: "10px", paddingLeft: "10px" }}>
                                            <p><strong>Délka:</strong> {lesson.length ? `${lesson.length} min` : "neznámá"}</p>
                                            <p><strong>Instruktoři:</strong></p>
                                            <ul>
                                                {lesson.instructors?.map(instr => (
                                                    <li key={instr.id}>{instr.name} {instr.surname}</li>
                                                )) ?? <li>Žádní instruktoři</li>}
                                            </ul>
                                            <p><strong>Téma:</strong> {lesson.topic?.name ?? "bez tématu"}</p>
                                            <p><strong>Místnosti:</strong></p>
                                            <ul>
                                                {lesson.facilities?.map(f => (
                                                    <li key={f.id}>{f.name}</li>
                                                )) ?? <li>Žádné místnosti</li>}
                                            </ul>
                                            <p><strong>Studijní skupiny:</strong></p>
                                            <ul>
                                               
                                                {lesson.studyGroups?.map(f => (
                                                    <li key={f.id}>{f.name}</li>
                                                )) ?? <li>Žádné učební skupiny</li>}
                                            </ul>
                                            <p><strong>Lastchange:</strong> {lesson.lastchange ?? ""}</p>
                                        </div>
                                    )}
                                </li>
                            ))}
                        </ul>
                    ) : (
                        <p>Žádné lekce</p>
                    )}

                    {children}
                </MiddleColumn>
            </Row>
        </StudyplanCardCapsule>
    );
};

