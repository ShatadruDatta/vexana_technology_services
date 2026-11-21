import Button from '@/components/Button'

export default function NotFound() {
  return (
    <section className="bg-grid flex min-h-[80vh] items-center bg-navy-950 pt-24">
      <div className="container-x text-center">
        <p className="text-gradient font-display text-7xl font-extrabold sm:text-8xl">404</p>
        <h1 className="mt-4 text-3xl font-semibold sm:text-4xl">Page not found</h1>
        <p className="mx-auto mt-4 max-w-md text-muted">The page you are looking for does not exist or may have moved.</p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Button to="/">Back to Home</Button>
          <Button to="/#contact" variant="secondary">Contact Us</Button>
        </div>
      </div>
    </section>
  )
}
