function Profile() {
    return (
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
                            Prashant Kumar
                        </h2>

                        <p className="text-gray-500">
                            prashant@example.com
                        </p>
                    </div>


                    <div className="divider"></div>


                    {/* User Details */}
                    <div className="grid md:grid-cols-2 gap-5">

                        <div>
                            <p className="text-sm text-gray-500">
                                Full Name
                            </p>
                            <p className="font-semibold">
                                Prashant Kumar
                            </p>
                        </div>


                        <div>
                            <p className="text-sm text-gray-500">
                                Email
                            </p>
                            <p className="font-semibold">
                                prashant@example.com
                            </p>
                        </div>


                        <div>
                            <p className="text-sm text-gray-500">
                                Phone
                            </p>
                            <p className="font-semibold">
                                +91 9876543210
                            </p>
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


                    {/* Actions */}
                    <div className="flex flex-wrap gap-3 justify-center">

                        <button className="btn btn-primary">
                            Edit Profile
                        </button>

                        <button className="btn btn-outline">
                            My Orders
                        </button>

                        <button className="btn btn-error btn-outline">
                            Logout
                        </button>

                    </div>

                </div>

            </div>

        </div>
    )
}

export default Profile;