import { useLocation } from "react-router-dom";

export default function useCurrentToken() {
    const hash = useLocation().hash;
    const token = new URLSearchParams(hash).get('#access_token');
    return token;
}