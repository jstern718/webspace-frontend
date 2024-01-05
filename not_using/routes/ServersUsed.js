"Use strict;"

import WebspaceApi from "../api";



function ServersUsed() {
    let path = window.location.pathname;
    console.log("ServersUsed runs");
    let display = WebspaceApi.getItem(path);
    console.log("serverUsed display", display);

    return (
      <div>
        <p>serversUsed</p>
          <p>{display}</p>
      </div>
    );
  }

export default ServersUsed;