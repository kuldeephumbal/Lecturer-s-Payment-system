import Header from "./Header";
export default function Dashboard() {
    return (<>
        <Header />
        <main id="main" className="main">
            <div className="pagetitle">
                <h1><i className="fa-solid fa-table" /> Dashboard</h1>
            </div>
            <hr />
            <div className="container mt-4">
                {/* Your content here */}
                <div className="row">
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Recent Activity</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non
                                    consequat magna fermentum ac. Cras ut ultricies eros.</p>
                            </div>
                        </div>
                    </div>
                    <div className="col-md-6">
                        <div className="card">
                            <div className="card-body">
                                <h5 className="card-title">Statistics</h5>
                                <p className="card-text">Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam
                                    scelerisque id nunc nec volutpat. Etiam pellentesque tristique arcu, non
                                    consequat magna fermentum ac. Cras ut ultricies eros.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </main>
    </>);
}
