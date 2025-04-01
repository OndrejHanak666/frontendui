import 'bootstrap/dist/css/bootstrap.min.css';

import { AppCanvas, createAsyncGraphQLAction, useAsyncAction } from '@hrbolek/uoisfrontend-gql-shared'
/*import { AppRouter } from './AppRouter';*/

const User = ({ name, surname, children }) => {
    return (
        <div>{name} {surname}, {children} </div>
    );
};



/*const fetchUserAction = createAsyncGraphQLAction('{
    userPage {
        id
        name
        surname
    }

}')*/

const FirstEntity = () => {
    const { loading, error, entity, Dispa } = useAsyncAction(fetchUserAction, { id: "123" }, { deferred: true});

    const data = read();
    return <div>User: {data}</div>
}




export const App = () => {
    return (
        // <Container fluid>
        <AppCanvas>
            {/* <Navbar className='bg-light'>
                <Container>
                    <Navbar.Brand href="" className="justify-content-start"><a href='/' className='btn'>UOIS</a></Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav" className="justify-content-end">
                        <LogButton />
                    </Navbar.Collapse>
                </Container>
            </Navbar> */}
           Hello World  <User name = "John" surname = "Newbie" children = "3"></User> 
           <img src="chrudimak.png" alt="Český výsadkář z Chrudimi s červeným baretem" />
           {/*<AppRouter />*/} 
        </AppCanvas>    
        // {/* </Container> */}
    )
}

