import { Select, SelectContent, SelectGroup, SelectItem,
    SelectLabel, SelectTrigger, SelectValue
 } from "@/components/ui/select";

import { Input } from "./ui/input";
import {Textarea} from './ui/textarea';
import Button from "./Button";

const Form = () => {
    return (
        <form className="flex flex-col">
            <div className="flex flex-col gap-5 mb-5">
                <Input type="fullname" placeholder="Full Name"/>
                <Input type="email" placeholder="user@email.com"/>
                <div className="flex flex-col xl:flex-row gap-5" >
                  <Input type="phone" placeholder="+1234567890"/>
                  <Select>
                    <SelectTrigger className="w-full rounded-none h-13.5 text-secondary outline-none">
                        <SelectValue placeholder="Select a service" ></SelectValue>
                    </SelectTrigger>
                    <SelectContent>
                        <SelectGroup>
                            <SelectLabel>Select a service</SelectLabel>
                            <SelectItem value="installatioon">Installatioon</SelectItem>
                            <SelectItem value="measurement">Measurement</SelectItem>
                            <SelectItem value="consulting">Consulting</SelectItem>
                            <SelectItem value="others">Others</SelectItem>
                        </SelectGroup>
                    </SelectContent>
                  </Select>
                </div>
            </div>
            <div className="flex flex-col gap-6">
                {/* textarea */}
                <Textarea className="h-45 resize-none rounded-none" placeholder="Enter your message"/>
                {/* btn */}
                <Button text="Send message"/>
            </div>
        </form>
    )
}

export default Form