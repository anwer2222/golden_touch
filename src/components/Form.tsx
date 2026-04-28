"use client";

import React from "react";
import { 
    Select, SelectContent, SelectGroup, SelectItem,
    SelectLabel, SelectTrigger, SelectValue
} from "@/components/ui/select";
import { Input } from "./ui/input";
import { Textarea } from './ui/textarea';
import { Button } from "./ui/button";
import { sendEmail } from "./Mail";
import { RiArrowRightUpLine } from "react-icons/ri";

const Form = () => {
    const [formValues, setFormValues] = React.useState({
        name: '',
        phone: '',
        email: '',
        service_type: '',
        message: '',
    });

  const isFormIncomplete = Object.values(formValues).some(value => value.toString().trim() === '');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormValues(prev => ({ ...prev, [name]: value }));
  };

  // Dedicated handler for the Shadcn Select component
  const handleSelectChange = (value: string) => {
    setFormValues(prev => ({ ...prev, service_type: value }));
  };

  const handleSubmit = async (formData: FormData) => {
    const result = await sendEmail(formData);
    if (result.success) {
      alert(result.message);
    } else {
      alert(result.message);
    }
  };

    return (
        <form className="flex flex-col" action={handleSubmit}>
            <div className="flex flex-col gap-5 mb-5">
                {/* Added name="name" */}
                <Input name="name" id="name" type="text" placeholder="Full Name" value={formValues.name} onChange={handleChange}/>
                
                {/* Added name="email" */}
                <Input name="email" id="email" type="email" placeholder="user@email.com" value={formValues.email} onChange={handleChange}/>
                
                <div className="flex flex-col xl:flex-row gap-5" >
                  {/* Added name="phone" */}
                  <Input name="phone" id="phone" type="tel" placeholder="+1234567890" value={formValues.phone} onChange={handleChange}/>
                  
                  {/* Added value and onValueChange to control the Select state */}
                  <Select name="service_type" value={formValues.service_type} onValueChange={handleSelectChange}>
                    <SelectTrigger className="w-full rounded-none h-13.5 text-secondary outline-none text-black">
                        <SelectValue placeholder="Select a service" />
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select a service</SelectLabel>
                            <SelectItem value="installation">Installation</SelectItem>
                            <SelectItem value="measurement">Measurement</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {/* Added name="message" */}
                <Textarea name="message" id="message" className="h-45 resize-none rounded-none" placeholder="Enter your message" value={formValues.message} onChange={handleChange}/>
                
                <Button type="submit" className="w-52.5 h-13.5 py-1.25 pl-2.5 flex items-center justify-between min-w-50 group bg-accent hover:bg-chart-1" disabled={isFormIncomplete}>
                    <div className="flex-1 text-center tracking-[1.2px] font-primary font-bold text-primary text-sm uppercase">
                      Send message
                    </div>
                    <div className="w-11 h-11 bg-primary flex items-center justify-center mr-1">
                        <RiArrowRightUpLine className="text-white text-xl group-hover:rotate-45 transition-all duration-200"/>
                    </div>
                </Button>
            </div>
        </form>
    )
}

export default Form;