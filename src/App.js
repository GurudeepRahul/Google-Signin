import {useEffect} from 'react';
import './App.css';

function App() {
  function handleCallBackResponse (response) {
    console.log(response.credential);
  }

  useEffect(() => {
    /* global google */
    google.accounts.id.initialize({
      client_id : "904101667242-5h26poo8dvdns15pp2a504nv3u2fodme.apps.googleusercontent.com",
      callback: handleCallBackResponse
    })

    google.accounts.id.renderButton(
      document.getElementById("signInDiv"),
      {theme: "outline", size: "large"}
    )
  }, []);
  return (
    <div className="App">
      <div id="signInDiv"></div>
    </div>
  );
}

export default App;
