import axios from "axios";
import store from "../redux/store/store";
import {HideLoader, ShowLoader} from "../redux/state-slice/settings-slice";
import {SetALLProduct, SetTotal} from "../redux/state-slice/product-slice";
const BaseURL="http://localhost:5000/api/v1"



export function GetProductList(pageNo,perPage,searchKey){
    store.dispatch(ShowLoader())
    let URL=BaseURL+"/ProductList/"+pageNo+"/"+perPage+"/"+searchKey;
    axios.get(URL).then((res)=>{
        store.dispatch(HideLoader())
        if(res.status===200){
            store.dispatch(SetALLProduct(res.data['data']))
            store.dispatch(SetTotal(res.data['total']))

        }
        else{

        }
    }).catch((err)=>{
        store.dispatch(HideLoader())
    });
}





// Registration Request function
export function RegistrationRequest(Email, FirstName, LasttName, Mobile, Password, Photo){
    
    let URL = BaseURL+"/Registrations"
    let PostBody = {
        Email:Email,
        FirstName:FirstName,
        LasttName:LasttName,
        Mobile:Mobile,
        Password: Password,
        Photo:Photo
    }
    return axios.post(URL, PostBody).then( (res) => {

        // loder start display none 
        // store.dispatch(HideLoader())

        // LoderDisplay.classList.add("Display_None")


        if(res.status === 200){
            
            if(res.data["status"]=== "Fail"){
                // email exist kore ki na seta chack kora hoyeche
                if(res.data.data.keyPattern.Email ===1){
                    alert('Email Already Exist');
                    return false
                }else{
                    alert('Something Went Wrong');
                    console.log(res);
                    return false;
                }
                // end email exist kore ki na seta chack kora hoyeche 
            }else{
                // LoderDisplay.classList.remove("Display_None")

                alert('Registration Success');
                return true;

            }


        }else{
            alert("Error in status not match in == 200")
            return false
        }


    }).catch( (Err) => {

        // loder stop display none
        // store.dispatch(ShowLoader())

        if(Err.status === 200){
            alert("Email All Redy exist")
            return false
        }else{
            alert("error Catch block")
            return false
        }


        // console.error(err);
        // alert("Error Catch Block");
        // return false;
    });

}