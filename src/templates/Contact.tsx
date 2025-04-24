'use client';

import React from 'react';
import { toast } from 'react-toastify';

import Input from '../components/input';
import { Recaptcha } from '../components/recaptcha';

const Contact = () => {
  const [email, setEmail] = React.useState('');
  const [fullname, setFullname] = React.useState('');
  const [message, setMessage] = React.useState('');
  const [showRecaptcha, setShowRecaptcha] = React.useState(false);
  const [isLoading, setIsLoading] = React.useState(false);
  const sendData = async () => {
    setIsLoading(true);
    const response = await fetch(
      'https://admin.harvely.com/api/message-dug-assistants',
      {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          Authorization: `Bearer 5d5a8ca3f0f2bc86426ab60cac04771576338d956b828a394033b6858839b6ddc9ff66505bb2749c479dab84a05a150713fe3e5755221b94808d249d00bbae832dbe8da37a9dd2c6f5bf580c3dc6bbde2b69c438d26f4edbefa42229b2f9e53353bc48870d62695e4b74d83ea5f1c103361422a323b189b1fb75830f9c31fb0e`,
        },
        body: JSON.stringify({ data: { fullname, email, message } }),
      },
    );
    setIsLoading(false);
    if (response.ok) {
      setEmail('');
      setFullname('');
      setMessage('');
      setShowRecaptcha(false);
      toast.success(
        'Merci de votre message, un membre de notre équipe va bientot vous contacter.',
        {
          position: 'top-right',
          autoClose: 5000,
          hideProgressBar: false,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
          progress: undefined,
        },
      );
    }
  };
  return (
    <div id="contact">
      {showRecaptcha && (
        <Recaptcha
          onChange={(value: any) => {
            setShowRecaptcha(false);
            if (value) sendData();
          }}
        />
      )}
      <div className="flex w-full flex-col  gap-8 px-4 py-8 md:px-32 md:py-16">
        <h1 className="text-back-100 mb-10 text-[24px] font-bold text-[#003085] md:text-[32px]">
          Contact
        </h1>

        <div className="grid grid-cols-1 gap-4 md:grid-cols-3 md:gap-16 ">
          <div className="flex items-center gap-8 rounded-md bg-[#003085] px-4 py-6">
            <div className="w-[50px] rounded-full bg-white p-4 ">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <path
                  className="fill-current text-[#003085]"
                  d="M280 0C408.1 0 512 103.9 512 232c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-101.6-82.4-184-184-184c-13.3 0-24-10.7-24-24s10.7-24 24-24zm8 192a32 32 0 1 1 0 64 32 32 0 1 1 0-64zm-32-72c0-13.3 10.7-24 24-24c75.1 0 136 60.9 136 136c0 13.3-10.7 24-24 24s-24-10.7-24-24c0-48.6-39.4-88-88-88c-13.3 0-24-10.7-24-24zM117.5 1.4c19.4-5.3 39.7 4.6 47.4 23.2l40 96c6.8 16.3 2.1 35.2-11.6 46.3L144 207.3c33.3 70.4 90.3 127.4 160.7 160.7L345 318.7c11.2-13.7 30-18.4 46.3-11.6l96 40c18.6 7.7 28.5 28 23.2 47.4l-24 88C481.8 499.9 466 512 448 512C200.6 512 0 311.4 0 64C0 46 12.1 30.2 29.5 25.4l88-24z"
                />
              </svg>
            </div>
            <div className=" flex flex-col gap-4 text-white">
              <h2 className="text-[20px] font-semibold">Appelez nous</h2>
              <p className="text-[16px]">+243 991746590, +243 975436688</p>
            </div>
          </div>
          <div className="flex items-center gap-8 rounded-md border-2 border-solid border-[#003085] px-4 py-6">
            <div className="w-[50px] rounded-full bg-[#003085] p-4">
              <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
                <path
                  className="dark:text-back-100 fill-current text-white"
                  d="M256 0a256 256 0 1 1 0 512A256 256 0 1 1 256 0zM232 120l0 136c0 8 4 15.5 10.7 20l96 64c11 7.4 25.9 4.4 33.3-6.7s4.4-25.9-6.7-33.3L280 243.2 280 120c0-13.3-10.7-24-24-24s-24 10.7-24 24z"
                />
              </svg>
            </div>
            <div className=" flex flex-col gap-4 text-[#003085]">
              <h2 className="text-[20px] font-semibold">Du Lundi - Samedi</h2>
              <p className="text-[16px]">08 : 00 - 17 : 00</p>
            </div>
          </div>
          <div className="flex items-center gap-8 rounded-md bg-[#003085] px-4 py-6">
            <div className="w-[50px] rounded-full bg-white p-4">
              <svg
                className="w-full"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 512 512"
              >
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                  <path
                    className="fill-current text-[#003085]"
                    d="M215.7 499.2C267 435 384 279.4 384 192C384 86 298 0 192 0S0 86 0 192c0 87.4 117 243 168.3 307.2c12.3 15.3 35.1 15.3 47.4 0zM192 128a64 64 0 1 1 0 128 64 64 0 1 1 0-128z"
                  />
                </svg>
              </svg>
            </div>
            <div className=" flex flex-col gap-4 text-white">
              <h2 className="text-[20px] font-semibold">Addresse</h2>
              <p className="text-[16px]">
                7832 Boulevard KILWA coin RUWE Golf Lido C/Lubumbashi
              </p>
            </div>
          </div>
        </div>
        <div className="mt-8 flex w-full flex-col gap-6 md:flex-row md:gap-16">
          <div className="border-back-100/20 w-full rounded-lg border-2 p-6 md:w-[50%] dark:border-white/50">
            <div className="flex flex-col md:flex-row md:items-center md:gap-4">
              <Input
                name="fullname"
                label="Nom complet"
                placeholder=""
                bgColor="mb-4 h-[40px] w-full rounded-md border border-back-100/20 focus:border-[#616161] bg-white/90"
                onChange={(e: any) => setFullname(e)}
                defaultValue={fullname}
              />
              <Input
                name="email"
                label="Email"
                placeholder=""
                bgColor="mb-4 h-[40px] w-full rounded-md border border-back-100/20 bg-white/90"
                onChange={(e: any) => setEmail(e)}
                defaultValue={email}
              />
            </div>
            <textarea
              placeholder="Message"
              className="mb-4 h-[150px] w-full rounded-md border border-[#003085]/20 bg-white/90"
              onChange={(e: any) => setMessage(e.target.value)}
              value={message}
            />
            <button
              className="w-full rounded-md bg-[#003085] px-4 py-2 font-semibold text-white"
              onClick={() => {
                if (isLoading) return;
                setShowRecaptcha(true);
              }}
            >
              {isLoading ? 'Envoi ...' : 'Nous contacter'}
            </button>
          </div>

          <iframe
            title="Harvely Company"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3907.4199329913113!2d27.462137311264346!3d-11.664622788495553!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x19723f67d69a9dd9%3A0x2d04a12d5d4c8107!2sCollege%20Ufundi!5e0!3m2!1sen!2scd!4v1745516475564!5m2!1sen!2scd"
            style={{ border: 0 }}
            className="h-[800px] w-full rounded-[5px] md:h-auto md:w-3/5"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default Contact;
