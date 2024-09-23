import { UserInfo } from "@sugar-core/typings/src/basic";
import { requestClient } from "api/request";



export async function getUserInfoApi() {
   return requestClient.get<UserInfo>('/user/info')
}