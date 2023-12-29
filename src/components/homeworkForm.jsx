import React from "react";
import axios from "axios";

export default function HomeworkForm() {
  async function submit() {
    const title = document.getElementById("title").value;
    const subject = document.getElementById("subject").value;
    const date = document.getElementById("date").value;
    const description = document.getElementById("description").value;
    const important = document.getElementById("important").checked;

    if (!title || !subject || !date || !description) {
      return;
    }

    const day = date.split("/")[0];
    const month = date.split("/")[1];
    const year = date.split("/")[2];

    //check if these values are numbers
    if (isNaN(day) || isNaN(month) || isNaN(year)) {
      alert("Invalid date");
      return;
    }

    const dateObj = new Date(year, month - 1, day);

    if (dateObj < Date.now()) {
      alert("You can't add a homework in the past");
      return;
    }

    const res = await axios.get(
      `/api/homeworks/add?title=${title}&subject=${subject}&date=${date}&description=${description}&important=${important}&timestamp=${dateObj.getTime()}`,
      {
        withCredentials: true,
      }
    );

    if (res.data.error) {
      alert(res.data.error);
    } else {
      window.location.reload(false);
    }
  }

  return (
    <form className="homeworks-form">
      <div className="homeworks-form-top">
        <input
          type="text"
          placeholder="title"
          id="title"
          className="homeworks-form-input input-black"
        />
        <input
          type="text"
          placeholder="subject"
          id="subject"
          className="homeworks-form-input input-grey"
        />
        <input
          type="text"
          placeholder="date"
          id="date"
          className="homeworks-form-input input-lightgrey"
        />
      </div>
      <textarea
        id="description"
        placeholder="description"
        className="homeworks-form-area"
      ></textarea>
      <div className="homeworks-form-top">
        <button
          type="button"
          onClick={submit}
          className="button button-red form-button"
        >
          Submit
        </button>
        <span className="homeworks-form-bot">Important <input type="checkbox" className="checkbox" id="important"/></span>
      </div>
    </form>
  );
}
