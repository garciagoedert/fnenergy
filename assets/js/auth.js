/**
 * Mock Authentication Logic for FN Energy Portal
 * Uses localStorage to simulate a session.
 * 
 * Credentials (Hardcoded for Demo):
 * User: admin@fnenergy.com
 * Pass: admin
 */

const AUTH_KEY = 'fn_auth_token';
const MOCK_TOKEN = 'mock_valid_token_12345';

const Auth = {
    /**
     * Attempt login with credentials
     * @param {string} email 
     * @param {string} password 
     * @returns {Promise<boolean>}
     */
    login: async (email, password) => {
        // Simulate API delay
        await new Promise(resolve => setTimeout(resolve, 800));

        if (email === 'admin@fnenergy.com' && password === 'admin') {
            localStorage.setItem(AUTH_KEY, MOCK_TOKEN);
            localStorage.setItem('user_name', 'Cliente FN');
            return true;
        }
        return false;
    },

    /**
     * Logout user
     */
    logout: () => {
        localStorage.removeItem(AUTH_KEY);
        localStorage.removeItem('user_name');
        window.location.href = '../login.html';
    },

    /**
     * Check if user is authenticated. 
     * If requireAuth is true and not logged in, redirects to login.
     * @param {boolean} requireAuth 
     * @returns {boolean}
     */
    isAuthenticated: (requireAuth = false) => {
        const token = localStorage.getItem(AUTH_KEY);
        const isValid = token === MOCK_TOKEN;

        if (requireAuth && !isValid) {
            // Save current location for redirect after login (optional, simple version just goes to login)
            window.location.href = '../login.html';
            return false;
        }

        return isValid;
    },

    /**
     * Get current user name
     */
    getUserName: () => {
        return localStorage.getItem('user_name') || 'Usuário';
    }
};
