import React, { useContext } from "react";
import { Context } from "../store/appContext";

const Main = () => {
  const { actions, store } = useContext(Context);

  const { people, peopleDetail } = store;

  console.log(actions, store);

  console.log("People: ", people);
  console.log("Detalles", peopleDetail);

  if (!people) return null;

  return (
    <>
      <div className="d-flex">
        <div className="">

          {people.map((user) => (

            <div className="card" key={user.uid} style={{ width: "20rem" }}>
              <img src="/" className="card-img-top" alt="..." />
              <div className="card-body">
                <h5 className="card-title">{user.name}</h5>
                <p className="card-text">{user.url}</p>
                <button type="button" className="btn btn-outline-primary">
                  Gender:
                  Hair color:
                  Eye color:
                </button>
                <button
                  type="button"
                  className="btn btn-outline-warning float-end"
                >
                  ❤️
                </button>
              </div>
            </div>

          ))}

        </div>
      </div>
    </>
  );
};

export default Main;
