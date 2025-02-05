import React, { useState } from 'react';

function Contact() {
    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const [isSubmitted, setIsSubmitted] = useState(false); // State to track if the form has been submitted successfully
    const [submitError, setSubmitError] = useState(''); // State to store submission errors

    const handleInput = (e: any) => {
        const { name, value } = e.target;
        setFormData((prevState) => ({
            ...prevState,
            [name]: value
        }));
    };

    const submitForm = (e: any) => {
        e.preventDefault();

        const formURL = "/api/send"; // This should match the API route you created
        const data = new FormData();

        // Append each form field to the FormData object
        data.append('name', formData.name);
        data.append('phone', formData.phone);
        data.append('email', formData.email);
        data.append('message', formData.message);

        fetch(formURL, {
            method: "POST",
            body: data,
        }).then(response => {
            if (response.ok) {
                setIsSubmitted(true); // Set the submitted state to true
                setFormData({
                    name: "",
                    phone: "",
                    email: "",
                    message: ""
                });
                setTimeout(() => setIsSubmitted(false), 5000); // Reset the submission state after 5 seconds
            } else {
                throw new Error('Failed to send message');
            }
        }).catch(error => {
            console.error('Error:', error);
            setSubmitError('Failed to send your message. Please try again.');
            setTimeout(() => setSubmitError(''), 5000); // Reset the error message after 5 seconds
        });
    };

    return (
        <div className="container mx-auto px-4 sm:px-6" data-aos="fade-up">
            <h3 className="text-3xl sm:text-5xl font-bold text-center text-white mb-8 sm:mb-16">Оставьте заявку</h3>
            <div className="w-full sm:max-w-xl mx-auto">
                <form onSubmit={submitForm}>
                    <div className="mb-4">
                        <input type="text" name="name" onChange={handleInput} value={formData.name}
                               placeholder="Ваше имя *" required
                               className="w-full px-3 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                    </div>
                    <div className="mb-4">
                        <input type="tel" name="phone" onChange={handleInput} value={formData.phone}
                               placeholder="Ваш телефон *" required
                               className="w-full px-3 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                    </div>
                    <div className="mb-4">
                        <input type="email" name="email" onChange={handleInput} value={formData.email}
                               placeholder="Ваш E-mail"
                               className="w-full px-3 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                    </div>
                    <div className="mb-4">
                        <textarea name="message" onChange={handleInput} value={formData.message}
                                  placeholder="Описание проекта" rows={3}
                                  className="w-full px-3 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"></textarea>
                    </div>
                    {isSubmitted && <p className="text-green-500 text-center">Заявка успешно отправлена!</p>}
                    {submitError && <p className="text-red-500 text-center">{submitError}</p>}
                    <div className="text-center">
                        <button type="submit"
                                className="w-full sm:w-auto mt-2 sm:mt-4 bg-[#333333] hover:bg-[#292929] text-white font-bold py-2 sm:py-3 px-4 sm:px-6 rounded-lg transition duration-300">Отправить
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default Contact;
