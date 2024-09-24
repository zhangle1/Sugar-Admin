import { UserInfo } from "@sugar/types";
import { requestClient } from "api/request";



export async function getUserInfoApi() {
   return requestClient.get<UserInfo>('/user/info')
}