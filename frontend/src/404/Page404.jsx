//A 404 page designed using bootstrap
import {Nav} from "../nav/nav";

export const Page404 = () => {
    return (
        <>
            <Nav />
        <div className="container">
            <div className="row">
                <div className="col-12">
                    <div className="text-center mt-5">
                        <h1 className="display-1 fw-bold text-light">404</h1>
                        <p className="h1 text-light">Page Not Found</p>
                        <p className="h2 text-light">The page you requested was not found.</p>
                    </div>
                </div>
            </div>
        </div>
        </>
    );
}