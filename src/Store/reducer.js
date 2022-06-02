import ActionType from "./Constant/Constant";



let initialState={
    QuestionData:[
        // {
        //     Title:"",
        //     Desc:"",
        //     Uid:"",
        //     CourseName:""
        // },
    ],
};

let reducer=(state=initialState, action)=>{
    switch(action.type){
        case ActionType.AddQuestion:
            if(action.payload===""){
                return {
                    ...state,
                    QuestionData:[],
                };
            }else{
            return{
                ...state,
                QuestionData:[...action.payload],
            };   
        }
    
}
}
export default reducer;