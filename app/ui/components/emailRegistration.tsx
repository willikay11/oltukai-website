'use client';
import {hugeiconsLicense, Mail02Icon} from "@hugeicons/react-pro";
import clsx from "clsx";
import {useState} from "react";

hugeiconsLicense(
    "890e3333f427f30eb0b744e4d32392a6RT00NzkxODg2MzcwMDAwLFM9cHJvLFY9MSxQPUd1bXJvYWQsU1Q9QjVBMzQ1NzMsRVQ9MDIxMUY0RkM=",
);
export function EmailRegistration({border}: { border: boolean }) {
    const [error, setError] = useState<string>();

    const validateEmail = (email: string) => {
        const regex = /\S+@\S+\.\S+/;
        if (regex.test(email)) {
            setError(undefined)
        } else {
            setError('Email not valid.')
        }
    }

    return (
        <div className="w-full">
            <div className="w-full inline-flex">
                <div className={clsx('inline-flex rounded-[5px] bg-white items-center h-12 w-full px-4 mr-4', {
                    'border-gray-200 border-[1px]': border,
                    'border-red-500 border-[1px]': error
                })}>
                    <Mail02Icon className="text-gray-800 mr-2" size={16} />
                    <input
                        placeholder="Enter Email Address"
                        className="text-xs outline-0 w-full"
                        onChange={(event) => validateEmail(event.target.value)}
                    />
                </div>
                <button className="text-xs text-white bg-primary rounded-[5px] px-8">
                    Submit
                </button>
            </div>
            <p className="text-xs text-red-500 mt-2">{error}</p>
        </div>
    );
}