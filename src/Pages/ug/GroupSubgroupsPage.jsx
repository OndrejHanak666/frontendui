// import { useFreshItem } from "@hrbolek/uoisfrontend-shared/src"
import { useParams } from "react-router-dom"
import { useFreshItem, CreateAsyncQueryValidator, useDispatch } from "@hrbolek/uoisfrontend-shared/src"
import { GroupLargeCard } from "../../Components/Group/GroupLargeCard"
import { GroupSubgroupsCard } from "../../Components/Group/GroupSubgroupsCard"
import { GroupAsyncActions } from "../../Queries/_groups"

const validator = CreateAsyncQueryValidator({error: "Nepovedlo se načíst skupinu", success: "Načtení skupiny se povedlo"})
const academic = [
    "cd49e153-610c-11ed-bf19-001a7dda7110",
    "cd49e155-610c-11ed-844e-001a7dda7110"
]
const filterFacultiesOrDepartments = (group) => {
    const grouptypeid = group?.grouptype?.id 
    return academic.includes(grouptypeid)  
}

const filterValidSubFaculty = (group) => {
    const grouptypeid = group?.grouptype?.id 
    const valid = group?.valid
    return (grouptypeid === "cd49e155-610c-11ed-844e-001a7dda7110") && valid
}

const filterValidSubUniversity = (group) => {
    const grouptypeid = group?.grouptype?.id 
    const valid = group?.valid
    return (grouptypeid === "cd49e153-610c-11ed-bf19-001a7dda7110") && valid
}

export const GroupSubgroupsPage = ()  => {
    const {id} = useParams()
    const [onResolve, onReject] = validator(useDispatch())
    const [group, groupPromise] = useFreshItem({id}, GroupAsyncActions.read)
    groupPromise.then(onResolve, onReject)
    
    // thenable je Promise, takze lze pouzit jeji metodu then; 
    // teto metode predame funkce pro zpracovani spravneho (uspesneho) a chyboveho cteni

    if (group) {
        return (
            <GroupLargeCard group={group}>
                <GroupSubgroupsCard group={group} filterFunc={filterFacultiesOrDepartments}/>
            </GroupLargeCard>
        )
    } else {
        return (
            <div>Loading...</div>
        )
    }
    
}