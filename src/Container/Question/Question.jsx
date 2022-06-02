import React from "react";
import { ProSideBar, Navbar } from "../../Component";
import { BiUpvote } from "react-icons/bi";
import TextField from "@mui/material/TextField";
import './Question.scss'
import Button from "@mui/material/Button";


function Question() {
  let AllQuestion = JSON.parse(localStorage.getItem("GlobalQuestionData"));
  let Questionid = localStorage.getItem("SelectedQuestion");
  let Question;
  AllQuestion.forEach(element => {
      if(element.Qid==Questionid)
      {
          Question=element;
      }
  });

  return (
    <div>
      {/* {console.log(Question)}; */}
      <div>
        <Navbar />
      </div>
      <ProSideBar style={{ position: "fixed" }} />
      <div className="MainQuestion">
        <h1 style={{ marginTop: "1%" }}>{Question.Title}</h1>
        <hr
          style={{
            marginTop: "2%",
            backgroundColor: "#D0D3D4",
            border: "none",
            height: "1px",
          }}
        />
        <BiUpvote className="svg" />
        <div className="Desc">
          <span>{Question.Desc}</span>
        </div>

        <div className="Answer">
          <h3 style={{ marginTop: "5%", marginRight: "58%" }}>Your Answer:</h3>
          <div style={{marginLeft:"25%"}}>
            <TextField
              id="outlined-search"
              type="search"
              style={{ width: "70%", marginTop: "1%" }}
            />
            <Button variant="contained" style={{marginLeft:"4%",marginTop:"1rem"}}>Submit Asnwer</Button>
          </div>
          <div className="TotalAnswer">
              <h3>ANSWERS:</h3>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Question;
