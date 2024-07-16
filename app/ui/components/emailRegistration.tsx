'use client';
import {hugeiconsLicense, Mail02Icon} from "@hugeicons/react-pro";
import clsx from "clsx";
import axios from "axios";
import {useState} from "react";

hugeiconsLicense(
    "890e3333f427f30eb0b744e4d32392a6RT00NzkxODg2MzcwMDAwLFM9cHJvLFY9MSxQPUd1bXJvYWQsU1Q9QjVBMzQ1NzMsRVQ9MDIxMUY0RkM=",
);

let email = '';

export function EmailRegistration({border}: { border: boolean }) {
    const [error, setError] = useState<string>();
    const [isJoiningWaitList, setIsJoiningWaitList] = useState<boolean>(false);
    const [isSignedUp, setIsSignedUp] = useState<boolean>(false);

    const validateEmail = (e: string) => {
        const regex = /\S+@\S+\.\S+/;
        if (regex.test(e)) {
            setError(undefined);
            email = e;
        } else {
            setError('Email not valid.')
        }
    }

    const joinWaitList = () => {
        if (!email) {
            setError('Please enter your email address');
            return;
        }
        setIsJoiningWaitList(true);
        axios.post(`https://api.getwaitlist.com/api/v1/signup`, {
            email,
            waitlist_id: 18736
        }).then(() => {
            setIsJoiningWaitList(false);
            setIsSignedUp(true);
        }).catch((e) => {
            setIsJoiningWaitList(false);
        })
    }

    return (
        <div className="w-full">
            <div className="w-full inline-flex">
                <div className={clsx('inline-flex rounded-[5px] bg-white items-center h-12 w-full px-4 mr-4', {
                    'border-gray-200 border-[1px]': border,
                    'border-red-500 border-[1px]': error
                })}>
                    <Mail02Icon className="text-gray-800 mr-2" size={16} variant="twotone" />
                    <input
                        placeholder="Enter Email Address"
                        className="text-xs outline-0 w-full"
                        onChange={(event) => validateEmail(event.target.value)}
                    />
                </div>
                <button className="text-xs text-white bg-primary rounded-[5px] px-8 inline-flex items-center" onClick={() => joinWaitList()}>
                    Submit {
                    isJoiningWaitList ? (
                        <div className="ml-2">
                            <svg className="h-4 w-4 md:h-5 md:w-5 animate-spin" viewBox="3 3 18 18">
                                <path
                                    className="fill-white"
                                    d="M12 5C8.13401 5 5 8.13401 5 12C5 15.866 8.13401 19 12 19C15.866 19 19 15.866 19 12C19 8.13401 15.866 5 12 5ZM3 12C3 7.02944 7.02944 3 12 3C16.9706 3 21 7.02944 21 12C21 16.9706 16.9706 21 12 21C7.02944 21 3 16.9706 3 12Z"
                                ></path>
                                <path
                                    className={`fill-primary`}
                                    d="M16.9497 7.05015C14.2161 4.31648 9.78392 4.31648 7.05025 7.05015C6.65973 7.44067 6.02656 7.44067 5.63604 7.05015C5.24551 6.65962 5.24551 6.02646 5.63604 5.63593C9.15076 2.12121 14.8492 2.12121 18.364 5.63593C18.7545 6.02646 18.7545 6.65962 18.364 7.05015C17.9734 7.44067 17.3403 7.44067 16.9497 7.05015Z"
                                ></path>
                            </svg>
                        </div>
                    ) : null
                }
                </button>
            </div>
            <p className="text-xs text-red-500 mt-2">{error}</p>
        </div>
    );
}