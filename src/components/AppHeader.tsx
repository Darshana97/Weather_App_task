import {
  Navbar,
  NavbarBrand,
  
} from 'reactstrap';

function AppHeader() {
    return (
        <div >
            <Navbar color="light" light expand="lg">
                <img className="pr-3" src="https://img.icons8.com/fluent/64/757185/clouds.png"/>
                <NavbarBrand href="/">Weather App</NavbarBrand>   
            </Navbar>
        </div>
    )
}

export default AppHeader
