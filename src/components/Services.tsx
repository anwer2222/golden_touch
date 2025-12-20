export default function Services() {
    const services = [
      { title: 'Residential Design', desc: 'Tailored interiors for homes, apartments, and bespoke living spaces.' },
      { title: 'Commercial Interiors', desc: 'Workspace planning, branding integration, and fit-outs that work.' },
      { title: 'Consulting & Project Management', desc: 'From sourcing to installation: we manage every detail.' }
    ]
  
    return (
      <section id="services" className="mt-12">
        <h3 className="text-xl font-semibold">What we do</h3>
        <div className="mt-6 grid md:grid-cols-3 gap-6">
          {services.map(s => (
            <div key={s.title} className="p-5 border rounded-lg bg-popover">
              <div className="font-semibold">{s.title}</div>
              <div className="mt-2 text-chart-5 text-sm">{s.desc}</div>
            </div>
          ))}
        </div>
      </section>
    )
  }