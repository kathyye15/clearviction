export default function Page() {
  async function onSubmit(event) {
    event.preventDefault();

    const formData = new FormData(event.target);
    let formDataObject = {};

    for (let entry of formData) {
      let [name, input] = entry;
      formDataObject[name] = input;
    }
    let formattedFormData = JSON.stringify(formDataObject);

    const response = await fetch("/api/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: formattedFormData,
    })
      .then((res) => res.json())
      .catch(console.error);

    let data = await response;

    if (data) {
      const { message, error } = data;
      alert(message || error);
    }
  }

  return (
    <form id="submissionForm" className="form" onSubmit={onSubmit}>
      <label>Email:</label>
      <br />
      <input
        type="email"
        name="email"
        placeholder="example@gmail.com"
        size="50"
        required
      />
      <br />
      <label>Github Repo URL:</label>
      <br />
      <input
        type="url"
        name="githubRepoUrl"
        placeholder="https://github.com/js/example"
        size="50"
        required
      />
      <br />
      <button type="submit" className="submitButton">
        Submit
      </button>
    </form>
  );
}
