import * as Yup from 'yup';
import { Field, Form, Formik } from "formik"

const loginValidationSchema = Yup.object().shape({
    username: Yup.string().required('Required field')
        .min(3, 'Username must be at least 3 characters long')
        .max(20, 'Username must be at most 20 characters long'),
    password: Yup.string().required('Required field')
        .min(8, 'Password must be at least 8 characters long')
});

const initialValues = {
    username: "",
    password: ""
}

const onSubmit = (values: any) => {
    console.log(values)
}

const canProceed = (errors: any, touched: any) => {
    return (!errors.username && !errors.password && touched.username && touched.password)
}

export default function LoginComponent() {
    return (
        <div className="loginBlock flex flex-col align-center justify-start w-full h-full p-8 gap-8">
            <h1 className="flex content-center justify-center text-3xl">
                Login
            </h1>
            <Formik
                initialValues={initialValues}
                onSubmit={onSubmit}
                validationSchema={loginValidationSchema}
            >
                {({errors, touched}) => (
                    <Form>
                        <div className="flex flex-col gap-8">
                            <div className="textField flex flex-col items-center justify-center gap-2">
                                <div className="w-50">
                                    <label htmlFor="username" className="block mb-2.5 text-sm font-medium text-heading">Username</label>
                                    <Field type="text" name="username" placeholder="Username" id="username" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required />
                                </div>
                                <div className="w-50">
                                    <label htmlFor="password" className="block mb-2.5 text-sm font-medium text-heading">Password</label>
                                    <Field type="password" name="password" placeholder="Password" id="password" className="bg-neutral-secondary-medium border border-default-medium text-heading text-sm rounded-base focus:ring-brand focus:border-brand block w-full px-3 py-2.5 shadow-xs placeholder:text-body" required />
                                </div>
                            </div>
                            <div className="submitButton flex flex-col items-center justify-center">
                                <button
                                type="submit"
                                className="w-50 rounded-base"
                                style={{
                                    backgroundColor: canProceed(errors, touched) ? "#3b82f6" : "grey",
                                    color: "white",
                                    cursor: canProceed(errors, touched) ? "pointer" : "no-drop"
                                }}
                                disabled={!!errors.username || !!errors.password}
                                >Login</button>
                            </div>
                        </div>
                    </Form>
                )}
            </Formik>
        </div>
    )
}