import Head from "next/head";
import GoogleMapReact from "google-map-react";
import Card from "../components/Card";
import Button from "../components/Button";
import InputForm from "../components/InputForm";

const AnyReactComponent = ({ text }) => <div>{text}</div>;

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
        <Card>
          <InputForm text="Some address" placeholder="other address" />
          <InputForm text="Some address" placeholder="other address" />
          <Button text="Create Job" onClick={() => console.log("Lets gooo")} />
        </Card>

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
          <AnyReactComponent lat={59.955413} lng={30.337844} text="My Marker" />
        </GoogleMapReact>
      </div>
    </>
  );
}
