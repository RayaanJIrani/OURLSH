import { Link, useNavigate } from "react-router-dom";

export const Nav = () => {
  const identity = localStorage.getItem("tenant") ? "tenant" : "landlord";
  const tenant_id = localStorage.getItem("tenant");
  const landlord_id = localStorage.getItem("landlord");
  const navigate = useNavigate();

  const handleTenantProfile = () => {
    <Link to="/">{navigate(`/tenants/${tenant_id}`)}</Link>;
  };
 
  const handleLandlordProfile = () => {
    <Link to="/">{navigate(`/landlords/${landlord_id}`)}</Link>;
  };

  return (
    <div>
      <nav className=" bg-black bg-opacity-50 px-3 pt-3 pb-1 my-0 navbar ">
        <div className=" px-3">
          <h1 className="text-center text-white">MENU</h1>
        </div>
        {(() => {
          if (identity === "tenant") {
            return (
              <div className=" row ">
                <div className="nav-item active col" aria-current="page">
                  <a
                    className="nav-link text-white  p-2 col"
                    href="/workorders"
                  >
                    OrderList{" "}
                  </a>
                </div>
                <div className="nav-item col" aria-current="page">
                  <a className="nav-link text-white p-2" href="/workorders">
                    NewOrder{" "}
                  </a>
                </div>
                <div className="nav-item col" aria-current="page">
                  <a className="nav-link text-white  p-2" href="/payments">
                    NewPayment{" "}
                  </a>
                </div>
                <div className="nav-item col" aria-current="page">
                  <a
                    className="nav-link text-white  p-2"
                    href=""
                    onClick={handleTenantProfile}
                  >
                    MyProfile{" "}
                  </a>
                </div>
              </div>
            );
          } else if (identity === "landlord") {
            return (
              <div className=" row ">
                <div className="nav-item active col" aria-current="page">
                  <a
                    className="nav-link text-white  p-2 col"
                    href="/workorders"
                  >
                    OrderList{" "}
                  </a>
                </div>
                <div className="nav-item col" aria-current="page">
                  <a className="nav-link text-white p-2" href={`/tenantsList/${landlord_id}`}>
                    TenantList{" "}
                  </a>
                </div>

                <div className="nav-item col" aria-current="page">
                  <a
                    className="nav-link text-white  p-2 "
                    href=""
                    onClick={handleLandlordProfile}
                  >
                    MyProfile{" "}
                  </a>
                </div>
              </div>
            );
          }
        })()}
      </nav>
    </div>
  );
};
