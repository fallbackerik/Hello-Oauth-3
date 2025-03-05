const config = {};
const oidcClient = new Oidc.OidcClient(config);
document.getElementById("startLogin").addEventListener("click", () => {
  oidcClient.createAuthorizationRequest({}).then(authorizationRequest => {
    window.location = authorizationRequest.url;
  });
});
