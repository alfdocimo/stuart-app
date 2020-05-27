import Head from "next/head";
import GoogleMapReact from "google-map-react";

import JobManager from "../components/JobManager";
import Marker from "../components/Marker";
import { useReducer } from "react";

import { initialState, reducer, AppContext } from "../core";

export default function Home() {
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

          <GoogleMapReact
            bootstrapURLKeys={{
              key: process.env.GOOGLE_MAPS_API_KEY,
            }}
            defaultCenter={{
              lat: 59.95,
              lng: 30.33,
            }}
            defaultZoom={11}
          >
            <Marker lat={59.955413} lng={30.337844} icon="flag" />
          </GoogleMapReact>
        </div>
      </AppContext.Provider>
    </>
  );
}
