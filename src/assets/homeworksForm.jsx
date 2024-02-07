import axios from "axios";

export default function HomeworksForm() {
  async function addhomework() {
    const title = document.getElementById("title").value;
    const description = document.getElementById("description").value;
    const date = document.getElementById("date").value;
    const important = document.getElementById("important").checked;

    const dateObj = new Date(
      date.split("-")[0],
      date.split("-")[1] - 1,
      date.split("-")[2]
    );

    await axios.post(
      "/api/v1/homeworks/add",
      {
        title: title,
        description: description,
        date: dateObj.getTime(),
        important: important,
      },
      {
        withCredentials: true,
      }
    );

    var form = document.querySelector(".homeworks-form");

    form.style.display = "none";

  }

  function closeForm() {
    var form = document.querySelector(".homeworks-form");

    form.style.display = "none";
  }

  return (
    <div className="homeworks-form">
      <div className="homeworks-form-top">
        <input type="text" id="title" className="homeworks-form-title" placeholder="Title" />
        <input type="date" id="date" className="homeworks-form-date" />
        <div className="homeworks-form-important">
          <p>Important : <input type="checkbox" id="important" /></p>
        </div>
        <button className="button" onClick={closeForm}>
          Close
        </button>
      </div>
      <div className="homeworks-form-mid">
        <textarea className="homeworks-form-description" id="description" placeholder="Description"></textarea>
      </div>
      <div className="homeworks-form-bot">
        <button onClick={addhomework} className="button">Submit</button>
      </div>
    </div>
  );
}
