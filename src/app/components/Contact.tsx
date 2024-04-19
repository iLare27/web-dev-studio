import React, {useState} from 'react';

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        phone: "",
        email: "",
        message: ""
    });

    const handleInput = (e: any) => {
        const fieldName = e.target.name;
        const fieldValue = e.target.value;

        setFormData((prevState) => ({
            ...prevState,
            [fieldName]: fieldValue
        }));
    }

    const submitForm = (e: any) => {
        // We don't want the page to refresh
        e.preventDefault()

        const formURL = e.target.action
        const data = new FormData()

        // Turn our formData state into data we can use with a form submission
        Object.entries(formData).forEach(([key, value]) => {
            data.append(key, value);
        })

        // POST the data to the URL of the form
        fetch(formURL, {
            method: "POST",
            body: data,
            headers: {
                'accept': 'application/json',
            },
        }).then(() => {
            setFormData({
                name: "",
                phone: "",
                email: "",
                message: ""
            })
        })
    }

    return (
        <div className="container mx-auto" >
            <h3 className="text-5xl font-bold text-center text-white mb-16" data-aos="fade-up">Оставьте заявку</h3>
            <div className="max-w-xl mx-auto">
                <form action="#" method="POST" data-aos="fade-up" onSubmit={submitForm}>
                    <div className="mb-6">
                        <input type="text" name="name" onChange={handleInput} value={formData.name} placeholder="Ваше имя *" required className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                    </div>
                    <div className="mb-6">
                        <input type="tel" name="phone" onChange={handleInput} value={formData.phone} placeholder="Ваш телефон *" required className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                    </div>
                    <div className="mb-6">
                        <input type="email" name="email" onChange={handleInput} value={formData.email} placeholder="Ваш E-mail" className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"/>
                    </div>
                    <div className="mb-6">
                        <textarea name="message" onChange={handleInput} value={formData.message} placeholder="Описание проекта" rows={4} className="w-full px-4 py-2 rounded-lg focus:outline-none bg-[#333333] text-white"></textarea>
                    </div>
                    <div className="text-center">
                        <button type="submit" className="mt-4 bg-[#333333] hover:bg-[#292929] text-white font-bold py-3 px-6 rounded-lg transition duration-300">Отправить</button>
                    </div>
                </form >
            </div>
        </div>
    );
}

export default Contact;