import 'bootstrap/dist/css/bootstrap.min.css';

import { AppCanvas } from '@hrbolek/uoisfrontend-gql-shared'
/*import { AppRouter } from './AppRouter';*/

const User = ({ name, surname, children }) => {
    return (
        <div>{name} {surname}, {children} </div>
    );
};

const Cigos = ({pocet}) => {
    return (
        <div><b>Cigan: {pocet}</b></div>
    )
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
           Hello World  <User name = "John" surname = "Newbie" children = "3"></User> <Cigos pocet = "5"></Cigos>
           <img src="chrudimak.png" alt="Český výsadkář z Chrudimi s červeným baretem" />
           {/*<AppRouter />*/} 
        </AppCanvas>    
        // {/* </Container> */}
    )
}

