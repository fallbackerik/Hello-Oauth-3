const config = {};
const oidcClient = new Oidc.OidcClient(config);
document.getElementById("startLogin").addEventListener("click", () => {
  console.log("startLogin clicked");
  oidcClient.createAuthorizationRequest({}).then(authorizationRequest => {
    window.location = authorizationRequest.url;
  });
  console.log("auth flow succeeded");
});

console.log("app.js loaded");
