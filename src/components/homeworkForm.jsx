import React from "react";
import { Link } from "react-router-dom";

export default function HomeworkForm() {
  return (
    <form className="m-5">
      <div class="row text-center">
        <div class="col-6 m-3 text-center">
          <input type="text" class="form-control" placeholder="title" />
        </div>
        <div class="col m-3 text-center">
          <input type="text" class="form-control" placeholder="subject" />
        </div>
        <div class="col m-3 text-center">
          <input type="text" class="form-control" placeholder="date" />
        </div>
      </div>
      <div class="row text-center">
        <div class="col m-3 text-center">
          <textarea
            class="form-control"
            id="exampleFormControlTextarea1"
            rows="8"
            placeholder="description"
          ></textarea>
        </div>
      </div>
      <div className="m-3">
      <button type="button" class="btn btn-success btn-lg btn-block container-fluid">Submit</button>
      </div>
    </form>
  );
}
