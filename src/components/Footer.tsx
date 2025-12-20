export default function Footer() {
    return (
      <footer className="bg-popover border-t mt-12">
        <div className="max-w-6xl mx-auto px-6 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <div className="text-sm text-chart-5">© {new Date().getFullYear()} Golden Touch Interiors. All rights reserved.</div>
          <div className="text-sm text-muted-foreground">We acknowledge the traditional custodians of the land where we operate and pay respect to Elders past, present and emerging.</div>
        </div>
      </footer>
    )
  }