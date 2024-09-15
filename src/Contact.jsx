import React from 'react';

const Contact = () => {
  return (
    <section className="flex flex-col md:flex-row items-center justify-between py-20 px-5 bg-gradient-to-r from-gray-900 via-gray-800 to-black text-white" id='contact'>
      
      {/* Contact Info Section */}
      <div className="w-full md:w-1/2 mb-8 md:mb-0">
        <h2 className="text-4xl font-extrabold mb-4">Get in Touch</h2>
        <p className="text-lg mb-6">
          I would love to hear from you! Whether you have a question about my work or just want to say hello, feel free to drop me a message.
        </p>
        <div className="text-lg">
          <p><strong>Email:</strong> hemakarthikeyan2024@gmail.com</p>
          
          <p><strong>LinkedIn:</strong> <a href="https://www.linkedin.com/in/hemapriya-k-4536a730b/" className="text-indigo-500 hover:underline">linkedin.com/in/hemapriya-k</a></p>
        </div>
      </div>

     
     
      <div className="w-full md:w-1/2 flex justify-center">
        <img 
          src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQfb-IeIb8S29jXd6EOGlJc0c85s82S0Ks3ht7OW6x2u1T4gDEjbUOALrPpSs_FpMsrYUI&usqp=CAU" 
          alt="Get in Touch" 
          className="w-full h-auto max-w-md"
        />
      </div>
    
    </section>
  );
}

export default Contact;
