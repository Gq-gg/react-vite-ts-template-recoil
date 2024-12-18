export function getRandom(userId: number) {
  const now = new Date().getTime() + "";
  const key = Number(now.substring(now.length - 8, now.length - 4));
  const newkey = String(key + userId)
    .split("")
    .map((item) => item.charCodeAt(0))
    .join("")
    .split("")
    .reverse()
    .join("")
    .substring(0, 4);
  return now.substring(0, 9) + newkey;
}
