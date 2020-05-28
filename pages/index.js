import Head from "next/head";
import GoogleMapReact from "google-map-react";

import JobManager from "../components/JobManager";
import Marker from "../components/Marker";
import Toast from "../components/Toast";
import { useReducer } from "react";

import { initialState, reducer, AppContext, actions } from "../core";

export default function Home() {
  function handleCloseToast() {
    dispatch(actions.setIsValidJobToast(false));
  }
  const [state, dispatch] = useReducer(reducer, initialState);
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
      <AppContext.Provider value={{ state, dispatch }}>
        <div className="AppContainer">
          <JobManager />
          {state.jobs.isValidToast && (
            <Toast
              text="Job created successfully ✔"
              closeOnSeconds={5000}
              isVisible={state.jobs.isValidToast}
              onClose={handleCloseToast}
            />
          )}

          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GOOGLE_MAPS_API_KEY,
            }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33,
            }}
            defaultZoom={18}
            center={[
              state.pickUp.latitude ?? 59.95, // random coordinates so that the map doesn't appear white on the start
              state.pickUp.longitude ?? 30.33,
            ]}
          >
            {state.pickUp.isValid && (
              <Marker
                lat={state.pickUp.latitude}
                lng={state.pickUp.longitude}
                icon="house"
              />
            )}

            {state.dropOff.isValid && (
              <Marker
                lat={state.dropOff.latitude}
                lng={state.dropOff.longitude}
                icon="flag"
                type="dropOff"
              />
            )}
          </GoogleMapReact>
        </div>
      </AppContext.Provider>
    </>
  );
}
