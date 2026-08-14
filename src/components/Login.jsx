import { useRef, useState } from "react"
import { checkValidData } from "../utils/validate"
import { auth } from "../utils/firebase"
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth"

function Login() {
    const [isSignInForm, setIsSignInForm] = useState(true)
    const [errorMessage, setErrorMessage] = useState(null)
    const email = useRef(null)
    const password = useRef(null)
    const phone = useRef(null)

    const handleBtnClick = () => {
        const message = checkValidData(email.current.value, password.current.value)
        console.log(message)
        setErrorMessage(message)
        if (message) return

        if (isSignInForm) {
            createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed up 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                    // ..
                });
        }
        else {
            signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 
                    const user = userCredential.user;
                    // ...
                })
                .catch((error) => {
                    const errorCode = error.code;
                    const errorMessage = error.message;
                    setErrorMessage(errorMessage)
                });

        }
    }
    return (
        <form onSubmit={(e) => e.preventDefault()}>
            <div className="min-h-screen bg-base-200 flex justify-center items-center p-6">
                <div className="card bg-base-100 shadow-xl w-full max-w-3xl">
                    <div className="card-body">
                        {/* Profile Header */}
                        <div className="flex flex-col items-center gap-3">
                            <div className="avatar">
                                <div className="w-28 rounded-full">
                                    <img
                                        src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQVKIxuwSqgJuFllKhvtMd6sOtm40ee3j-G3Dl2q9Gn3fRhPgo7mstwpYA&s=10"
                                        alt="profile"
                                    />
                                </div>
                            </div>
                            <h2 className="text-3xl font-bold">
                                {isSignInForm ? "Sign-In to Shop" : "Hi! New Here, Signup"}
                            </h2>
                            <p className="text-gray-500">
                                {isSignInForm ? "SignIn to get started" : "SignUp to get started"}
                            </p>
                        </div>

                        <div className="divider"></div>
                        {/* User Details */}
                        <div className="grid md:grid-cols-2 gap-5">
                            {!isSignInForm && <div>
                                <p className="text-sm text-gray-500">
                                    Full Name
                                </p>
                                <input type="text" className="border border-black rounded-md px-2 py-1" />
                            </div>}

                            <div>
                                <p className="text-sm text-gray-500">
                                    Email
                                </p>
                                <input type="email"
                                    ref={email}
                                    className="border border-black rounded-md px-2 py-1"
                                />
                            </div>

                            {!isSignInForm && <div>
                                <p className="text-sm text-gray-500">
                                    Phone
                                </p>
                                <input type="number"
                                    ref={phone}
                                    className="border border-black rounded-md px-2 py-1"
                                />
                            </div>}

                            <div>
                                <p className="text-sm text-gray-500">
                                    Password
                                </p>
                                <input type="Password"
                                    ref={password}
                                    className="border border-black rounded-md px-2 py-1"
                                />
                            </div>

                            <div>
                                <p className="text-sm text-gray-500">
                                    Location
                                </p>
                                <p className="font-semibold">
                                    India
                                </p>
                            </div>
                        </div>

                        <div className="divider"></div>
                        <div className="flex text-center">

                            <p className="font-bold text-red-400 text-xl">{errorMessage}</p>
                        </div>

                        <div>
                            <p onClick={() => setIsSignInForm(!isSignInForm)}
                                className="font-bold text-lg cursor-pointer my-4">
                                {isSignInForm ? "New here! Click to Sign-Up" : "Already a user? Click to Sign-In"}
                            </p>
                        </div>
                        {/* Actions */}

                        <div className="flex flex-wrap gap-3 justify-center">

                            <button
                                onClick={() => handleBtnClick()}
                                className="btn btn-primary">
                                {isSignInForm ? "SignIn" : "SignUp"}
                            </button>

                        </div>

                    </div>

                </div>

            </div>
        </form>
    )
}

export default Login
