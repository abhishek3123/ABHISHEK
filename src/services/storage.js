const KEY = 'civic_issues_v1';
const AUTH_KEY = 'civic_admin_auth';
const THEME_KEY = 'theme';

export const storage = {
  getIssues() {
    try {
      const raw = localStorage.getItem(KEY);
      return raw ? JSON.parse(raw) : [];
    } catch {
      return [];
    }
  },
  setIssues(issues) {
    localStorage.setItem(KEY, JSON.stringify(issues));
  },
  getAuth() {
    try {
      const raw = localStorage.getItem(AUTH_KEY);
      return raw ? JSON.parse(raw) : { authed: false };
    } catch {
      return { authed: false };
    }
  },
  setAuth(auth) {
    localStorage.setItem(AUTH_KEY, JSON.stringify(auth));
  },
  getTheme() {
    return localStorage.getItem(THEME_KEY) || 'light';
  },
  setTheme(t) {
    localStorage.setItem(THEME_KEY, t);
  }
};
