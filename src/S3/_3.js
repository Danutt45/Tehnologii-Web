const formatString = (s, ...adj) => {
  let modified = s;
  for (let i = 0; i < adj.length; i++) {
    if (modified.indexOf("{substantiv}") !== -1) {
      modified = modified.replace("{substantiv}", adj[i]);
    } else {
      modified = modified.replace("{adjectiv}", adj[i]);
    }
  }
  return modified;
};

console.log(
  formatString(
    "un {substantiv} este {adjectiv},{adjectiv}",
    `calut`,
    `dragut`,
    "tot dragut"
  )
);
