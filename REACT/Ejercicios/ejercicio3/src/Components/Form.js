

export default function Form() {
    return (
        <div>
            <h3>New Contact</h3>
            <input className="form-control w-50 m-auto" type="text" placeholder="Insert your name" readonly></input>
            <input className="form-control w-50 m-auto " type="text" placeholder="Insert your last name" readonly></input>
            <input className="form-control w-50 m-auto " type="text" placeholder="Insert your direction" readonly></input>
            <input className="form-control w-50 m-auto" type="text" placeholder="Insert your city" readonly></input>
            <input className="form-control w-50 m-auto" type="text" placeholder="Insert your postal code" readonly></input>
            <input className="form-control w-50 m-auto" type="text" placeholder="Insert your phone number" readonly></input>
            <button className="w-50 m-auto btn bg-success">Register</button>
        </div>
    )
}
