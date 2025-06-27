import React from "react";
import { toast } from "react-toastify";
import { motion } from "framer-motion";

const Contacts = () => {

    const [result, setResult] = React.useState("");

    const onSubmit = async (event) => {
        event.preventDefault();
        
        setTimeout(setResult("Sending...."), 10);
     
    };

    return (
        <motion.div 
            initial={{opacity: 0, x: -200}}
            transition={{duration: 2.5}}
            whileInView={{opacity: 1, x: 0}}
            viewport={{once: true}} 
        className="text-center p-6 py-20 lg:px-32 w-full overflow-hidden" id="Contact">
             <h1 className="text-2xl sm:text-4xl font-bold mb-2 text-center">Contact <span className="underline
            underline-offset-4 decoration-1 font-light">With Us</span></h1>
            <p className="text-center text-gray-500 mb-12 max-w-80 mx-auto">Ready to buid your dream? Let's build it together!</p>
            <form onSubmit={onSubmit} className="max-w-2xl mx-auto text-gray-600 pt-8">
                <div className="flex flex-wrap">
                    <div className="w-full md:w-1/2 text-left">Your Name
                        <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="text" name="Name" placeholder="Your Name" required/>
                    </div>
                    <div className="w-full md:w-1/2 text-left md:pl-4">Your Email
                        <input className="w-full border border-gray-300 rounded py-3 px-4 mt-2" type="email" name="Email" placeholder="Your Email" required/>
                    </div>
                </div>
                <div>
                    Message
                    <textarea className="w-full border border-gray-300 rounded py-3 px-4 mt-2 h-48 resize-none" name="Message" placeholder="Message" required></textarea>
                </div>
                <button className="cursor-pointer bg-blue-600 text-white py-2 px-12 rounded-2xl mb-10">{result ? result : "Send Message"}</button>
            </form>
        </motion.div>
    )
}

export default Contacts;