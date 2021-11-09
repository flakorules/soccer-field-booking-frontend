const baseUrl = "https://localhost:44339/api";

const fetchNoToken = async (endpoint, data, method) => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: method,
    headers: myHeaders,
    body: raw,
    redirect: "follow",
  };

  

  const response = await fetch(`${baseUrl}/${endpoint}`, requestOptions);
  return await response.json();
  //return await fetch(`${baseUrl}/${endpoint}`, requestOptions);
};

const fetchWithToken = async (endpoint, data, method="") => {
  var myHeaders = new Headers();
  myHeaders.append("Content-Type", "application/json");
  myHeaders.append("Authorization", `Bearer ${localStorage.getItem("token")}` );

  var raw = JSON.stringify(data);

  var requestOptions = {
    method: method,
    headers: myHeaders,
    ...(method.toUpperCase() !== "GET" && { body: raw }),
    redirect: "follow"
  };

  const response = await fetch(`${baseUrl}/${endpoint}`, requestOptions);
  return await response.json();
  //return await fetch(`${baseUrl}/${endpoint}`, requestOptions);
};

export { fetchNoToken, fetchWithToken };