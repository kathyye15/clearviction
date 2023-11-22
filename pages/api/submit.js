export default function handler(req, res) {
  fetch("https://cv-devs-temp-challenge.vercel.app/api/challenge", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(req.body),
  })
    .then((data) => data.json())
    .then((data) => {
      res.status(200).send(data);
    })
    .catch((err) => res.send(err));
}
