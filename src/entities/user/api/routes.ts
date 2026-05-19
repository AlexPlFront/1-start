import { CONFIG } from "@/shared/config";

export const USER_ROUTES={
    profile:`${CONFIG.VITE_API_URL}/user/me`,
    byUserId:(uId:number)=>`${CONFIG.VITE_API_URL}/user/${uId}`
}