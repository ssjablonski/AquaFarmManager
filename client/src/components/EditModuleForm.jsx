import React from "react";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

const validationSchema = Yup.object({
    name: Yup.string().required("Required"),
    description: Yup.string().required("Required"),
    targetTemperature: Yup.number()
        .required("Required")
        .min(0, "Must be at least 0")
        .max(40, "Must be at most 40")
        .test("is-one-decimal", "Must be a number with at most one decimal place", value =>
            /^\d+(\.\d)?$/g.test(value.toString()),
        ),
});

const EditModuleForm = ({ initialValues, onSubmit }) => {
    return (
        <div>
            <h2 className="mb-4 text-center text-2xl font-bold">Edit Module Info</h2>
            <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={onSubmit}
            >
                <Form className="space-y-4">
                    <div>
                        <label className="block text-sm font-medium text-black-600 dark:text-white">
                            Name
                        </label>
                        <Field
                            name="name"
                            type="text"
                            className="mt-1 block w-full rounded-md bg-white p-2 shadow-sm dark:bg-black-300 dark:text-white"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-600" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black-600 dark:text-white">
                            Description
                        </label>
                        <Field
                            name="description"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 bg-white p-2 shadow-sm dark:bg-black-300 dark:text-white"
                        />
                        <ErrorMessage name="description" component="div" className="text-red-600" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-black-600 dark:text-white">
                            Target Temperature
                        </label>
                        <Field
                            name="targetTemperature"
                            type="number"
                            className="mt-1 block w-full rounded-md border-gray-300 bg-white p-2 shadow-sm dark:bg-black-300 dark:text-white"
                        />
                        <ErrorMessage
                            name="targetTemperature"
                            component="div"
                            className="text-red-600"
                        />
                    </div>
                    <div className="flex justify-center space-x-4">
                        <button
                            type="submit"
                            className="rounded-lg bg-black-600 px-4 py-2 text-white hover:bg-black-400"
                        >
                            Save
                        </button>
                    </div>
                </Form>
            </Formik>
        </div>
    );
};

export default EditModuleForm;
