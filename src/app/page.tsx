import EmptyHome from "@/components/emptyHome";
import List from "@/components/list";

// `app/dashboard/page.tsx` is the UI for the `/dashboard` URL
export default function Page() {
  return (
    <div>
      <EmptyHome>NO DATA - Selectionez une promotion</EmptyHome>
      <List></List>
    </div>

  )
}