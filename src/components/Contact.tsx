// 'use client'
// import { useState } from 'react'
// import { motion } from 'framer-motion'
// import { sendEmail } from './Mail';
// // import { Input } from './ui/input';

// export default function Contact() {
//   const [sent, setSent] = useState(false)
//   const [formValues, setFormValues] = React.useState({
//     name: '',
//     phone: '',
//     email: '',
//     company: '',
//     service_type: '',
//     message: '',
//   });

//   const isFormIncomplete = Object.values(formValues).some(value => value.toString().trim() === '');

//   const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
//     const { name, value } = e.target;
//     setFormValues(prev => ({ ...prev, [name]: value }));
//   };
//   const handleSubmit = async (formData: FormData) => {
        
//     const result = await sendEmail(formData);
//     if (result.success) {
//       alert(result.message);
//     } else {
//       alert(result.message);
//     }
//   };

//   return (
//     <section id="contact" className="mt-12">
//       <motion.div
//         initial={{ opacity: 0, y: 8 }}
//         whileInView={{ opacity: 1, y: 0 }}
//         transition={{ duration: 0.5 }}
//         viewport={{ once: true }}
//         className="p-6 border rounded-lg bg-background"
//       >
//         <div className="flex items-center justify-between">
//           <div>
//             <h5 className="text-lg font-semibold">Get in touch</h5>
//             <p className="text-chart-5 mt-1 max-w-2xs md:max-w-2xl">Ready to start your project? We’d love to hear about it.</p>
//           </div>
//           <div className="text-right text-sm text-chart-5">
//             <div>info@goldentouchinteriors.ca</div>
//             <div className="mt-1">+1 (555) 123-4567</div>
//           </div>
//         </div>

//         <form
//           // onSubmit={(e) => { e.preventDefault(); setSent(true); }}
//           action={handleSubmit}
//           className="mt-6 grid md:grid-cols-2 gap-4"
//         >
//           <input required id="name" placeholder="Your name" className="p-3 border rounded" value={formValues.name} onChange={handleChange}/>
//           <input required id="email" placeholder="Email" type="email" className="p-3 border rounded" value={formValues.email} onChange={handleChange}/>
//           <input placeholder="Company (optional)" id="company" className="p-3 border rounded md:col-span-2" value={formValues.company} onChange={handleChange}/>
//           <textarea required id="message" placeholder="Tell us about your project" className="p-3 border rounded md:col-span-2 h-28" value={formValues.message} onChange={handleChange}></textarea>

//           <div className="md:col-span-2 flex items-center justify-between">
//             <button className="px-5 py-2 rounded bg-primary text-primary-foreground font-semibold">Send message</button>
//             {sent && <div className="text-sm text-green-600">Thanks — we received your message!</div>}
//           </div>
//         </form>
//       </motion.div>
//     </section>
//   )
// }