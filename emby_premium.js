const url = $request.url;

const RESPONSES = {
  "/registration/validateDevice": {
    cacheExpirationDays: 1000,
    message: "Device Valid",
    resultCode: "GOOD",
  },
  "/registration/validate": {
    featId: "",
    registered: true,
    expDate: "2099-01-01",
    key: "",
  },
  "/registration/getStatus": {
    deviceStatus: "0",
    planType: "Lifetime",
    subscriptions: {},
  },
};

let body = null;
for (const [path, data] of Object.entries(RESPONSES)) {
  if (url.includes(path)) {
    body = JSON.stringify(data);
    break;
  }
}

$done(
  body
    ? {
        status: "HTTP/1.1 200 OK",
        headers: {
          "Content-Type": "application/json",
          "Access-Control-Allow-Origin": "*",
          "Access-Control-Allow-Headers": "*",
          "Access-Control-Allow-Method": "*",
          "Access-Control-Allow-Credentials": "true",
        },
        body,
      }
    : {},
);
