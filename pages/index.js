import Head from "next/head";
import GoogleMapReact from "google-map-react";

import JobManager from "../components/JobManager";
import Marker from "../components/Marker";

export default function Home() {
  return (
    <>
      <Head>
        <link
          href="https://fonts.googleapis.com/css2?family=Roboto&display=swap"
          rel="stylesheet"
        />
      </Head>
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
    </>
  );
}
