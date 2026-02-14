

export default function LoginComponent() {
    return (
        <div className="loginBlock flex flex-col align-center justify-start w-full h-full p-8 gap-8">
            <h1 className="flex content-center justify-center text-3xl">
                Login
            </h1>
            <div className="textField flex flex-col items-center justify-center gap-2">
                <div className="w-50">
                    <label htmlFor="username" className="block mb-2.5 text-sm font-medium text-heading">Username</label>
                    <input type="text" id="username" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />
                </div>
                <div className="w-50">
                    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Password</label>
                    <input type="text" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" placeholder="John" required />
                </div>
            </div>
            <div className="submitButton flex flex-col items-center justify-center">
                <button className="w-50 rounded-base" style={{ backgroundColor: "#3b82f6", color: "white" }}>Login</button>
            </div>
        </div>
    )
}