/// 创建user reducer
const user = (state:any,action:any) => {
    if(!state){
        return{
            name : "我是qm",
            sex : '男'
        }
    }
    switch(action.type){
        case "CHANGE_NAME":
        return{
            ...state,
            name:action.name
        }
        case "CHANGE_SEX":
        return{
            ...state,
            sex:action.sex
        }
        default:
        return state
    }
}

export default user