const BASE_URL = "https://backend-lwuu.onrender.com/api";

export async function getFixes(q?: string) {
  const res = await fetch(`${BASE_URL}/fixes${q ? "?q=" + q : ""}`);
  return res.json();
}

export async function submitFix(token: string, fix: any) {
  const res = await fetch(`${BASE_URL}/fixes`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
      Authorization: `Bearer ${token}`,
    },
    body: JSON.stringify(fix),
  });
  return res.json();
}

export async function login(email: string, password: string) {
  const res = await fetch(`${BASE_URL}/auth/login`, {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({ email, password }),
  });
  return res.json();
}
