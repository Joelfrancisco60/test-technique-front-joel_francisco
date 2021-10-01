import Filter from "../Filter/Filter";

const Navbar = (props) => {

    const {
	getCars,
    setCars,
	} = props;

    return(
        <nav class="d-flex flex-row bg-dark p-4 d-flex navbar navbar-light bg-light">
            <a class="text-white navbar-brand">Car location</a>
                <Filter
                     getCars={getCars}
                     setCars={setCars}
                />
        </nav>
    );
}

export default Navbar;