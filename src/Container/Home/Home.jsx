import { React, useState,useEffect } from "react";
import Button from "@mui/material/Button";
import TextField from "@mui/material/TextField";
import Dialog from "@mui/material/Dialog";
import DialogActions from "@mui/material/DialogActions";
import DialogContent from "@mui/material/DialogContent";
// import DialogContentText from "@mui/material/DialogContentText";
import DialogTitle from "@mui/material/DialogTitle";
// import Button from '../../Component/Button/Button'
// import { connect } from "react-redux";
// import ActionType from '../../Store/Constant/Constant'
import './Home.scss'
import {ProSideBar,Navbar} from '../../Component';
import { BsFillEyeFill } from "react-icons/bs";
import {useNavigate} from 'react-router-dom';

function Home() {
 const [open, setOpen] = useState(false);
 let Global=JSON.parse(localStorage.getItem("GlobalQuestionData"));
 let Navigate=useNavigate();

let initialState = {
  Title: "",
  Desc: "",
  CourseName: "",
};


 const [GlobalQuestion, setGlobalQuestion] = useState(initialState);

const handleClose = () => {
       setOpen(false);
     };
    


let PostQuestion=()=>{
    setOpen(true);
}


let SubmitQuestion=()=>{
  let Uid=JSON.parse (localStorage.getItem("LoginDetails")).Uid;
  let localData=[];
  let oldData=JSON.parse( localStorage.getItem("GlobalQuestionData"));
   let random = Math.floor(Math.random() * 100000);
   let Qid= random;
  if(oldData==null)
  {
    localData.push({...GlobalQuestion,Uid,Qid});
    localStorage.setItem("GlobalQuestionData",JSON.stringify(localData));
    // props.dispatch({type:ActionType.AddQuestion,payload:localData})
  }
  else{
    oldData.push({...GlobalQuestion,Uid,Qid});
    localStorage.setItem("GlobalQuestionData",JSON.stringify(oldData));
    // props.dispatch({type:ActionType.AddQuestion,payload:oldData})
  }



  handleClose();
}


let InputHandler =(e)=>{
  let {name,value}=e.target;
  setGlobalQuestion({...GlobalQuestion,[name]:value});
}


let moveToQuestion=(Qid)=>{
  localStorage.setItem("SelectedQuestion",Qid);
  Navigate("/Question");
}

  return (
    <div>

      <Navbar />
      <div>
        <ProSideBar />
        <h1 style={{ textAlign: "center" }}>Global Questions</h1>
      </div>
      <div className="postBtn">
        {/* <Button
          val="Post A Question"
          func={PostQuestion}
          styl={PostQuestionBtn}
        ></Button> */}
        <Button variant="contained" onClick={PostQuestion}>
          Post A Question
        </Button>
      </div>
      <div className="AllQuestion">
        {Global == null ? "No Question Available"
        :Global.map((val,index)=>{
          return (
            <>
              <hr
                style={{
                  backgroundColor: "#D0D3D4",
                  border: "none",
                  height: "1px",
                }}
              />
              <div className="Question">
                {/* <BsFillEyeFill> 0 Views</BsFillEyeFill> */}
                <h3 className="title" onClick={() => moveToQuestion(val.Qid)}>
                  <span>{`->`}</span> {val.Title}
                </h3>
                <p className="desc">
                  {val.Desc}
                  <span style={{ display: "flex", justifyContent: "flex-end" }}>
                    Views <strong style={{ marginLeft: "2%" }}>0</strong>
                  </span>
                </p>
              </div>
            </>
          );
       })}
      </div>

      <div>
        <Dialog open={open} onClose={handleClose}>
          <DialogTitle>Enter Question Details</DialogTitle>
          <DialogContent>
            {/* <DialogContentText>
              To subscribe to this website, please enter your email address
              here. We will send updates occasionally.
            </DialogContentText> */}
            <TextField
              name="Title"
              onChange={InputHandler}
              autoFocus
              margin="dense"
              id="Title"
              label="Title"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              name="Desc"
              onChange={InputHandler}
              autoFocus
              margin="dense"
              id="desc"
              label="Enter Desciption"
              type="text"
              fullWidth
              variant="standard"
            />
            <TextField
              name="CourseName"
              onChange={InputHandler}
              autoFocus
              margin="dense"
              id="Categories"
              label="Enter CourseName Which Question Is belongs to"
              type="text"
              fullWidth
              variant="standard"
            />
            {/* <Button val="Submit" func={SubmitQuestion} /> */}
          </DialogContent>
          <DialogActions>
            <Button onClick={handleClose}>Cancel</Button>
            <Button onClick={SubmitQuestion}>Submit</Button>
          </DialogActions>
        </Dialog>
      </div>
    </div>
  );}
      


// const mapReduxStatetoProps = (state) => {
//   // console.log("Map Redux", state.PostData);
//   return {
//     QuestionData:state.QuestionData,
//   };
// };

// let newApp = connect(mapReduxStatetoProps)(Home);


export default Home;