// 📁 src/pages/Auth/LogoutUser.js
import axios from "axios";

const LOGOUT_URL = "https://shivyantra.onrender.com/api/logout";

export const logoutUser = async () => {
  try {
    const token = localStorage.getItem("token");

    // If token is missing, clear everything directly
    if (!token) {
      localStorage.clear();
      return { success: true, message: "Already logged out" };
    }

    // ✅ Call backend logout API (GET request with auth header)
    const res = await axios.get(LOGOUT_URL, {
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });

    // If response indicates success
    if (res.status === 200) {
      // Clear everything from storage
      localStorage.removeItem("token");
      localStorage.removeItem("user");
      localStorage.removeItem("isLoginned");

      return { success: true, message: "Logout successful" };
    }

    return { success: false, message: "Unexpected server response" };
  } catch (err) {
    console.error("Logout error:", err);
    // Even on failure, clear local storage to ensure session is gone
    localStorage.removeItem("token");
    localStorage.removeItem("user");
    localStorage.removeItem("isLoginned");

    return {
      success: false,
      message: err.response?.data?.message || "Logout failed. Please try again.",
    };
  }
};
