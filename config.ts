export const BASE_URL =
  process.env.NODE_ENV === "production"
    ? "https://smb-digital-zone-backend.vercel.app/api"
    : "http://localhost:5000/api";
