const config = {
    authority: 'https://accounts.google.com', // e.g., 'https://accounts.google.com' for Google
    client_id: '960468044348-jh6jlm9rk7u47ejgskfnchc2l1j8i3p6.apps.googleusercontent.com ', // Replace with your Client ID from Google Cloud Console
    redirect_uri: window.location.origin + '/callback.html', // Callback URL - important for GitHub Pages
    response_type: 'code',
    scope: 'openid profile email', // Scopes to request
    pkce: true, // Enable PKCE
};
const oidcClient = new Oidc.OidcClient(config);
document.getElementById("startLogin").addEventListener("click", () => {
  console.log("startLogin clicked");
  oidcClient.createAuthorizationRequest({}).then(authorizationRequest => {
    window.location = authorizationRequest.url;
  });
  console.log("auth flow succeeded");
});

console.log("app.js loaded");
