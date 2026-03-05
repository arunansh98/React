export default function usePaginator(items, pageSize){
  const total = items.length;
  const pages = Math.ceil(total / pageSize);
  return pages;
}