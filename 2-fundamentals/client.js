async function makeRequest() {
  const res = await fetch("http://localhost:4000/graphql", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ query: "{ greeting }" }),
  });

  const { data } = await res.json();

  console.log(data);
}

makeRequest();
