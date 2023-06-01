import { Component, FormEvent } from "react";

 interface Cars {
    id: number;
    license_plate_number: string;
    brand: string;
    model: string;
    daily_cost: number;
    created_at: string;
    updated_at: string
}

interface carResponeList {
    cars: Cars[];
}

interface State {
    cars: Cars[],
    license_plate_number: string,
    brand: string,
    model: string,
    daily_cost: number,
}
export default class Main extends Component<{}, State> {

    state: State = {
         cars: [],
         license_plate_number:'',
         brand:'',
         model:'',
         daily_cost: 0
     }

    async loadCars() {
        let response = await fetch('http://localhost:3000/api/cars');
        let data = await response.json() as carResponeList;
        this.setState({
            cars: data.cars
        });
    }

    async handleSubmit(event: FormEvent<HTMLFormElement>) {
        event.preventDefault();

        const {license_plate_number} = this.state;

        const dbData = {
            license_plate_number: license_plate_number
        }

        let response = await fetch('http://localhost:3000/api/cars', {
            method: 'POST',
            headers: {  
                'Content-type': 'application/json'
            },
            body: JSON.stringify(dbData),
        });

        this.setState({
            license_plate_number: ''
        })
    }

    async onLoad() {
        this.loadCars();
    }

    componentDidMount() {
        this.onLoad();
    }


    render() {
        return <>
        <div className="container-fluid">
            <nav className="mt-5 ms-5">
                <a href="#form" className="text-decoration-none">Új Auto felvétele &emsp;</a>
                <a href="https://petrik.hu/" className="text-decoration-none">Petrik honlap</a>
                <h2 className="mt-2">Petrik Autokölcsönző</h2>
            </nav>
                <div className="row mt-4 ms-3 me-3">
                    {this.state.cars.map((cars: Cars) => (
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card mt-3 ms-1 me-1">
                            <div className="cord-body">
                                <h3>{cars.license_plate_number}</h3>
                                <p>Márka: {cars.brand}</p>
                                <p>Modell: {cars.model}</p>
                                <p>Napidij: {cars.daily_cost} Ft</p>
                                <img src={'images/ford_chile.png'} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    ))}
            </div>
            <div className="d-block mt-5" id="form">
                <h3 className="text-center">Új autó felvétele</h3>
                <form className="form text-center" onSubmit={this.handleSubmit}>
                        <label htmlFor="plate">Rendszám</label><br />
                        <input type="text" id="plate" required className="form-control mt-2" value={this.state.license_plate_number} onChange={e => this.setState({license_plate_number: e.currentTarget.value})}/>
                        <label htmlFor="brand">Márka</label><br />
                        <input type="text" id="brand" className="form-control mt-2"/>
                        <label htmlFor="model">Modell</label><br />
                        <input type="text" id="model" className="form-control mt-2" />
                        <label htmlFor="dij">Napidij</label><br />
                        <input type="number" id="dij" className="form-control mt-2" />
                        <button type="submit" className="btn btn-dark mt-4">Felvétel</button>
                </form>
            </div>
            <footer className="mt-5 ms-5">
                <p>Készítette: Zuber Marcell</p>
            </footer>
        </div>
    </>
    }
}