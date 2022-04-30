import { useLocation } from "react-router-dom";

export default function useTokenFromHash() {
  const hash = useLocation().hash;
  return new URLSearchParams(hash).get('#access_token');
}


