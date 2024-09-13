import { refreshToken } from "@/api";
import { useAppSelector } from "@/redux/hooks";
import { RootState } from "@/redux/store";
export const useAuth = () => {
  const isauthenticate = async () => {
    try {
      const res = await refreshToken();
      if (res.status === 200) {
        return true;
      }
      return false;
    } catch (error) {
      console.log(error);
      return false;
    }
  };
  let user = useAppSelector((state: RootState) => state.authFeature.user);
  return { isauthenticate, user };
};
