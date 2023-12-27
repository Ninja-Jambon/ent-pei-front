import React from "react";
import axios from "axios";

export default function HomeworkForm() {
  async function submit() {
    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;

    const res = await axios.get(`/api/homeworks/add?title=${title}&subject=${subject}&date=${date}&description=${description}`, {
      withCredentials: true,
    });

    if (res.data.error) {
      alert(res.data.error);
    } else {
      window.location.reload();
    }
  }

  return (
    <form className="m-5">
      <div className="row text-center">
        <div className="col-6 m-3 text-center">
          <input type="text" className="form-control" placeholder="title" id="title" />
        </div>
        <div className="col m-3 text-center">
          <input type="text" className="form-control" placeholder="subject" id="subject" />
        </div>
        <div className="col m-3 text-center">
          <input type="text" className="form-control" placeholder="date" id="date" />
        </div>
      </div>
      <div className="row text-center">
        <div className="col m-3 text-center">
          <textarea
            className="form-control"
            id="description"
            rows="8"
            placeholder="description"
          ></textarea>
        </div>
      </div>
      <div className="m-3">
      <button type="button" className="btn btn-success btn-lg btn-block container-fluid" onClick={submit}>Submit</button>
      </div>
    </form>
  );
}
