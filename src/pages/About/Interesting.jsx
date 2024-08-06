import React from 'react'
import Button from '../../components/assets/Button'

export const Interesting = () => {

    const cards = [
        {
            number: "01",
            quantity: "500+",
            img: "/images/law.png",
            text: "CLINICAL & HEALTHCARE CONSULTATION"
        },
        {
            number: "02",
            quantity: "743+",
            img: "/images/law-image.png",
            text: "CORONARY ANGIOGRAPHY (CAG) & RENAL ANGIOGRAPHY"
        },
        {
            number: "03",
            quantity: "784+",
            img: "/images/lawyer-iman.png",
            text: "PERCUTANEOUS CORONARY INTERVENTION (PCI) SURGERIES"
        },
        {
            number: "04",
            quantity: "364+",
            img: "/images/lawyer-women.png",
            text: "CORONARY TOTAL OCCULATION (CTO)"
        },
        {
            number: "05",
            quantity: "748+",
            img: "/images/law-book.png",
            text: "PACEMAKER IMPLANTATION SURGERIES"
        },
        {
            number: "06",
            quantity: "750+",
            img: "/images/supremet.png",
            text: "BALLOON VALVULOPLASTY (PVMV) SURGERIES"
        },
        {
            number: "07",
            quantity: "123+",
            img: "/images/supreme-cou.png",
            text: "CLINICAL PUBLICATIO"
        },
        {
            number: "08",
            img: "/images/bank-of-america.png",
            quantity: "MULTIPLE",
            text: "MEDICAL WRITING & ACADEMIC CONSULTATION",

        }
    ]

    return (
        <section className='px-2 md:px-4 lg:px-8 xl:px-12 2xl:px-16 grid grid-cols-4 gap-10 ms-3'>
            {
                cards.map((card, i) => {
                    return (
                        <div className="container">
                            <div class="card border-0 rounded-0" style={{ width: '18rem', height:"400px", backgroundColor: '#f0ebeb' }}>
                                <h1 className='fs-1 mt-4 ms-4 fw-bold'>{card.number}</h1>
                                <img style={{ margin: '0 auto' }} src={card.img} className="card-img-top w-50 mt-4" alt="..." />
                                <div class="card-body">
                                    <h5 class="card-title fs-3 text-center">{card.quantity}</h5>
                                    <p class="card-text fs-5 text-center">{card.text}</p>
                                </div>
                            </div>
                        </div>
                    )
                })
            }
        </section>
    )
}
