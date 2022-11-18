export const EntryBox = ({title = "",children}) => {
return (
    <>
        <div className="container py-5 my-5 h-100">
            <div className="row d-flex justify-content-center align-items-center h-100">
                <div className="col-12 col-md-8 col-lg-8 col-xl-6">
                    <div className="card shadow-2-strong">
                        <div className="card-body p-5 text-center">
                            {!(title === "") && <h1 className="mb-5 ">{title}</h1>}
                            {children}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </>
  );
}