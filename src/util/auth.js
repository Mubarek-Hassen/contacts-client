import { redirect } from "react-router-dom";

export const setAuthToken =(string)=>{
  localStorage.setItem("token", string)
}

export function getAuthToken(){
  const token = localStorage.getItem("token");
  return token
}

export function removeAuthToken(){
  localStorage.removeItem("token")
}

export function tokenLoader(){
  return getAuthToken()
}

export const checkAuthLoader =()=>{
  const token = getAuthToken()
  if(!token){
    return redirect("/auth?mode=register")
  }
  return null
}