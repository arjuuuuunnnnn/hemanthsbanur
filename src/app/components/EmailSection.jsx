// "use client";
// import React, { useState } from "react";
// import GithubIcon from "/public/github-icon.svg";
// import LinkedinIcon from "/public/linkedin-icon.svg";
// import Link from "next/link";
// import Image from "next/image";

// const EmailSection = () => {
//   const [emailSubmitted, setEmailSubmitted] = useState(false);

//   const handleSubmit = async (e) => {
//     e.preventDefault();
//     try {
//       const data = {
//         email: e.target.email.value,
//         subject: e.target.subject.value,
//         message: e.target.message.value,
//       };
//       const JSONdata = JSON.stringify(data);
//       const endpoint = "api/send";

//       const options = {
//         method: 'POST',
//         headers: {
//           'Content-Type': 'application/json',
//         },
//         body: JSONdata,
//       };

//       const response = await fetch(endpoint, options);
//       const resData = await response.json();
//       console.log(resData);

//       if (resData.status === 200) {
//         console.log("Message sent");
//         setEmailSubmitted(true);
//       } else {
//         console.error("Error sending email:", resData.error);
//         setEmailSubmitted(false);
//       }
//     } catch (error) {
//       console.error("Error sending email:", error);
//       setEmailSubmitted(false);
//     }
//   };

//   return (
//     <section
//       id="contact"
//       className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
//     >
//       <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
//       <div className="z-10">
//         <p className="text-xl font-extrabold text-emerald-800 my-2">
//           Let&apos;s connect
//         </p>
//         <p className="text-zinc-400 mb-4 max-w-md">
//           {" "}
//           I&apos;m currently looking for new opportunities, my inbox is always open,
//           Whether you have a question or just want to say hi, I&apos;ll try my best
//           to get back to you!
//         </p>
//         <div className="socials flex flex-row gap-2">
//           <Link href="https://github.com/arjuuuuunnnnn">
//             <Image src={GithubIcon} alt="Github Icon" />
//           </Link>
//           <Link href="https://www.linkedin.com/in/hemanth-s-banur-3aaa34284/">
//             <Image src={LinkedinIcon} alt="Linkedin Icon" />
//           </Link>
//         </div>
//       </div>
//       <div>
//         <form className="flex flex-col" onSubmit={handleSubmit}>
//           <div className="mb-6">
//             <label
//               htmlFor="email"
//               className="text-zinc-400 block text-sm mb-2 font-medium"
//             >
//               Your email
//             </label>
//             <input
//               name="email"
//               type="email"
//               id="email"
//               required
//               className="bg-[#18191E] border border-emerald-800 placeholder-zinc-400 text-sm rounded-lg block w-full p-2.5"
//               placeholder="email"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="subject"
//               className="text-zinc-400 block text-sm mb-2 font-medium"
//             >
//               Subject
//             </label>
//             <input
//               name="subject"
//               type="text"
//               id="subject"
//               required
//               className="bg-[#18191E] border border-emerald-800 placeholder-zinc-400 text-sm rounded-lg block w-full p-2.5"
//               placeholder="Hello Hemanth here..!"
//             />
//           </div>
//           <div className="mb-6">
//             <label
//               htmlFor="message"
//               className="text-zinc-400 block text-sm mb-2 font-medium"
//             >
//               Message
//             </label>
//             <textarea
//               name="message"
//               id="message"
//               className="bg-[#18191E] border border-emerald-800 placeholder-zinc-400 text-sm rounded-lg block w-full p-2.5"
//               placeholder="Let&apos;s talk about..."
//             />
//           </div>
//           <button
//             type="submit"
//             className="font-medium py-2.5 px-5 rounded-lg w-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-900 text-zinc-200"
//           >
//             Send Message
//           </button>
//           {emailSubmitted && (
//             <p className="text-green-500 text-sm mt-2">
//               Email sent successfully!
//             </p>
//           )}
//         </form>
//       </div>
//     </section>
//   );
// };

// export default EmailSection;


"use client";
import React, { useState } from "react";
import GithubIcon from "/public/github-icon.svg";
import LinkedinIcon from "/public/linkedin-icon.svg";
import Link from "next/link";
import Image from "next/image";
import { useForm } from '@formspree/react';

const EmailSection = () => {
  const [state, handleSubmit] = useForm('mrgnoplp');
  const [emailSubmitted, setEmailSubmitted] = useState(false);

  const onSubmit = async (e) => {
    e.preventDefault();
    try {
      await handleSubmit(e);
      if (state.succeeded) {
        setEmailSubmitted(true);
        e.target.email.value = "";
        e.target.subject.value = "";
        e.target.message.value = "";
      } else {
        setEmailSubmitted(false);
      }
    } catch (err) {
      console.error("Error submitting form:", err);
      setEmailSubmitted(false);
    }
  };

  return (
    <section
      id="contact"
      className="grid md:grid-cols-2 my-12 md:my-12 py-24 gap-4 relative"
    >
      <div className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-emerald-900 to-transparent rounded-full h-80 w-80 z-0 blur-lg absolute top-3/4 -left-4 transform -translate-x-1/2 -translate-1/2"></div>
      <div className="z-10">
        <p className="text-xl font-extrabold text-emerald-800 my-2">
          Let&apos;s connect
        </p>
        <p className="text-zinc-400 mb-4 max-w-md">
          {" "}
          I&apos;m currently looking for new opportunities, my inbox is always open,
          Whether you have a question or just want to say hi, I&apos;ll try my best
          to get back to you!
        </p>
        <div className="socials flex flex-row gap-2">
          <Link href="https://github.com/arjuuuuunnnnn">
            <Image src={GithubIcon} alt="Github Icon" />
          </Link>
          <Link href="https://www.linkedin.com/in/hemanth-s-banur-3aaa34284/">
            <Image src={LinkedinIcon} alt="Linkedin Icon" />
          </Link>
        </div>
      </div>
      <div>
        <form className="flex flex-col" onSubmit={onSubmit}>
          <div className="mb-6">
            <label
              htmlFor="email"
              className="text-zinc-400 block text-sm mb-2 font-medium"
            >
              Your email
            </label>
            <input
              name="email"
              type="email"
              id="email"
              required
              className="bg-[#18191E] border border-emerald-800 placeholder-zinc-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="arjunbanur27@gmail.com"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="subject"
              className="text-zinc-400 block text-sm mb-2 font-medium"
            >
              Subject
            </label>
            <input
              name="subject"
              type="text"
              id="subject"
              required
              className="bg-[#18191E] border border-emerald-800 placeholder-zinc-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="Hello Hemanth here..!"
            />
          </div>
          <div className="mb-6">
            <label
              htmlFor="message"
              className="text-zinc-400 block text-sm mb-2 font-medium"
            >
              Message
            </label>
            <textarea
              name="message"
              id="message"
              className="bg-[#18191E] border border-emerald-800 placeholder-zinc-400 text-sm rounded-lg block w-full p-2.5"
              placeholder="Let&apos;s talk about..."
            />
          </div>
          <button
            type="submit"
            className="font-medium py-2.5 px-5 rounded-lg w-full bg-gradient-to-br from-emerald-950 via-emerald-900 to-lime-900 text-zinc-200"
            disabled={state.submitting}
          >
            Send Message
          </button>
        
        {emailSubmitted && (
          <p className="text-green-500 text-sm mt-2">
            Email sent successfully!
          </p>
        )}
        </form>
      </div>
    </section>
  );
};

export default EmailSection;