import Topbar from "../assets/topbar";
import HomeworksForm from "../assets/homeworksForm";
import HomeworksList from "../assets/homeworksList";

import "./homeworks.css";

export default function Homeworks({ user }) {
  function showForm() {
    var form = document.querySelector(".homeworks-form");

    form.style.display = "flex";
  }
  return (
    <div className="homeworks">
      <Topbar user={user} page={1} />
      <div className="homeworks-top">
        <button className="button button-add" onClick={showForm}>
          Add homework
        </button>
      </div>
      <HomeworksList />
      <HomeworksForm />
    </div>
  );
}
