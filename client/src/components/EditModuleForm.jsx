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

const EditModuleForm = ({ initialValues, onSubmit, onClose }) => {
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
                        <label className="block text-sm font-medium text-gray-800">Name</label>
                        <Field
                            name="name"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 bg-white p-2 shadow-sm"
                        />
                        <ErrorMessage name="name" component="div" className="text-red-600" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Description
                        </label>
                        <Field
                            name="description"
                            type="text"
                            className="mt-1 block w-full rounded-md border-gray-300 bg-white p-2 shadow-sm"
                        />
                        <ErrorMessage name="description" component="div" className="text-red-600" />
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700">
                            Target Temperature
                        </label>
                        <Field
                            name="targetTemperature"
                            type="number"
                            className="mt-1 block w-full rounded-md border-gray-300 bg-white p-2 shadow-sm"
                        />
                        <ErrorMessage
                            name="targetTemperature"
                            component="div"
                            className="text-red-600"
                        />
                    </div>
                    <div className="flex justify-end space-x-4">
                        <button
                            type="button"
                            onClick={onClose}
                            className="rounded-lg bg-gray-300 px-4 py-2 text-gray-700 hover:bg-gray-400"
                        >
                            Cancel
                        </button>
                        <button
                            type="submit"
                            className="bg-black-600 hover:bg-black-400 rounded-lg px-4 py-2 text-white"
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
