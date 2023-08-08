import { registerApplication, start } from "single-spa";

// registerApplication({
//   name: "@single-spa/welcome",
//   app: () =>
//     System.import(
//       "https://unpkg.com/single-spa-welcome/dist/single-spa-welcome.js"
//     ),
//   activeWhen: ["/"],
// });

registerApplication({
  name: "zoom-app",
  app: () => import(/* webpackIgnore: true */ "http://localhost:5173/src/main.js"),
  activeWhen: ["/"],
});

start({
  urlRerouteOnly: true,
});
