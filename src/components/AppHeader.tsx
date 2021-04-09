import {
  Navbar,
  NavbarBrand,
  
} from 'reactstrap';

function AppHeader() {
    return (
        <div >
            <Navbar color="light" light expand="lg">
                <img className="pr-1" src="https://img.icons8.com/fluent/64/757185/clouds.png"/>
                <NavbarBrand style={{color:'#66458a',fontWeight:'bold'}} href="/">Weather App</NavbarBrand>   
            </Navbar>
        </div>
    )
}

export default AppHeader
