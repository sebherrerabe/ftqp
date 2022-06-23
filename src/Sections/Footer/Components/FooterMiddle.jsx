


import './Footer.css';




const FooterMidlle = () => {



    const Days = () => {

        const open = [
            {
                id: 1,
                day: 'lundi',
                time: '09h00 - 17h00'
            },
            {
                id: 2,
                day: 'mardi',
                time: '09h00 - 17h00'
            },
            {
                id: 3,
                day: 'mercredi',
                time: '09h00 - 17h00'
            },
            {
                id: 4,
                day: 'jeudi',
                time: '09h00 - 17h00'
            },
            {
                id: 5,
                day: 'vendredi',
                time: '09h00 - 17h00'
            },
            {
                id: 6,
                day: 'Samedi',
                time: 'Fermé'
            },
            {
                id: 7,
                day: 'Dimanche',
                time: 'Fermé'
            }
        ]

        return (
            <div className='horaire-container'>

                <h4 className='horaire'>Horaire</h4>
                {open.map(jour => <>
                    <p key={open.id} className='paragraph'> <b>{jour.day} :</b>  {jour.time} </p>
                </>
                )
                }
            </div>
        )
    }



    return (
        <div className="footer-middle-container">
            <div className='map-container'>
                <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2520.3551647624204!2d4.325601115906278!3d50.82458496821642!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47c3c43f10f7e125%3A0xe644926db645fcd7!2sRue%20des%20Alli%C3%A9s%20303%2C%201190%20Forest!5e0!3m2!1sen!2sbe!4v1655725843214!5m2!1sen!2sbe" title="hi" className='map-size' style={{ border: 0, borderRadius:"20px" }}  allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>

            </div>
            <div className="open">
                
                <Days />


            </div>
        </div>


    )
}




export default FooterMidlle;