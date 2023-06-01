import { Component } from "react";

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
    cars: []
}
export default class Main extends Component<{}, State> {

    state: State = {
         cars: []
     }

    async loadCars() {
        
    }

    render() {
        return <>
        <div className="container-fluid">
            <nav className="mt-5 ms-5">
                <a href="#" className="text-decoration-none">Uj Auto felvétele &emsp;</a>
                <a href="https://petrik.hu/" className="text-decoration-none">Petrik honlap</a>
                <h2 className="mt-2">Petrik Autokölcsönző</h2>
            </nav>
            <div className="col-md-12">
                <div className="row mt-4 ms-3 me-3">
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card">
                            <div className="cord-body">
                                <h3>IOA-699</h3>
                                <p>Márka: ford</p>
                                <p>Modell: Chille</p>
                                <p>Napidij: 24000 Ft</p>
                                <img src={'images/ford_chile.png'} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card">
                            <div className="cord-body">
                                <h3>IOA-699</h3>
                                <p>Márka: ford</p>
                                <p>Modell: Chille</p>
                                <p>Napidij: 24000 Ft</p>
                                <img src={'images/ford_chile.png'} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                    <div className="col-lg-4 col-md-4 col-sm-4">
                        <div className="card">
                            <div className="cord-body">
                                <h3>IOA-699</h3>
                                <p>Márka: ford</p>
                                <p>Modell: Chille</p>
                                <p>Napidij: 24000 Ft</p>
                                <img src={'images/ford_chile.png'} alt="" className="img-fluid" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <footer className="mt-5 ms-5">
                <p>Készítette: Zuber Marcell</p>
            </footer>
        </div>
    </>
    }
}