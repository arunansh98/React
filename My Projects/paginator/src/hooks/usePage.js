export default function usePage(page, pageSize, items) {
  const low = page * pageSize;
  const high = page * pageSize + (pageSize - 1);
  return items.slice(low, high + 1);
}
