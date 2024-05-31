import clsx from 'clsx';
import React from 'react';

const BusinessInfoContent = () => {
    return (
        <div className='flex-1 p-8 w-full'>
            <div
                className='text-xl font-semibold mb-5 flex items-center px-4'
                style={{ color: "rgba(0, 0, 0, 0.7)" }}
            >
                Create your business page
            </div>
            <div className='flex' style={{ gap: 72 }}>
                <div className='left-section-info' style={{ width: 266 }}>
                    <div
                        className='bg-white py-2.5 px-4 data-content flex flex-col'
                        style={{
                            borderRadius: 10,
                            minHeight: 100,
                            boxShadow: "1px 2px 25px rgba(0, 0, 0, 0.05)",
                            gap: "30px"
                        }}
                    >
                        <InfoContent
                            number={1}
                            active
                            headTitle="Business Info"
                            desc="Business name, address, contact number and logo"
                        />
                        <InfoContent
                            number={2}
                            headTitle="Business Hours"
                            desc="Business name, address, contact number and logo"
                        />
                        <InfoContent
                            number={3}
                            headTitle="About Business"
                            desc="Support type, caters, about, highlights"
                        />
                        <InfoContent
                            number={4}
                            headTitle="Owner Details"
                            desc="Owner name and mobile no."
                        />
                        <InfoContent
                            number={5}
                            headTitle="Business Id."
                            desc="Unique Business Id."
                        />
                        <InfoContent
                            number={6}
                            headTitle="Upload Images"
                            desc="Images related to your business"
                        />
                        <InfoContent
                            number={7}
                            headTitle="Reviews"
                            desc="Collect up to 10 reviews from your existing clients"
                        />
                        <InfoContent
                            number={8}
                            headTitle="Services"
                            desc="Select the services offered by your business"
                        />
                    </div>
                </div>
                <div className='right-section-info flex-1'>
                    <div className='text-4xl font-bold mb-10 w-full'
                        style={{
                            color: "rgba(0, 132, 255, 1)",
                            lineHeight: "1.5rem"
                        }}
                    >
                        BUSINESS INFORMATION
                    </div>
                    <div className='flex flex-col w-full'>
                        <BusinessContent
                            title="Business name, address and location"
                        >
                            <InputControl
                                placeholder="Business Name"
                                className='mb-6'
                            />
                            <InputControl
                                placeholder="Street Address"
                                className='mb-6'
                            />
                            <div className='flex items-center'>
                                <InputControl
                                    placeholder="Zip Code"
                                    className='mr-5'
                                    type="number"
                                />
                                <InputControl
                                    placeholder="City"
                                />
                            </div>
                            <div className='flex items-center'>
                                <InputControl
                                    placeholder="State"
                                    className='mr-5'
                                />
                                <InputControl
                                    placeholder="State"
                                />
                            </div>
                        </BusinessContent>
                    </div>
                </div>
            </div>
        </div>
    );
}

const InfoContent = (props) => {
    const { headTitle, desc, number, active } = props;

    return (
        <div className='flex gap-3'>
            {
                number &&
                <div className='number-show'>
                    <div
                        className='flex items-center justify-center pb-0.5'
                        style={{
                            height: 22,
                            width: 22,
                            backgroundColor: active ? "rgba(0, 132, 255, 1)" : "rgba(200, 200, 200, 1)",
                            color: "white",
                            borderRadius: "100%"
                        }}
                    >
                        {number}
                    </div>
                </div>
            }
            {
                (headTitle || desc) &&
                <div className='flex-1' style={{ color: "rgba(0, 0, 0, 0.6)" }}>
                    <div
                        className={`info-section-head text-xl font-semibold ${desc && "mb-2.5"}`}
                        style={{ lineHeight: "20px" }}
                    >{headTitle}
                    </div>
                    <div className='info-section-desc text-sm font-normal'>{desc}</div>
                </div>}
        </div >
    )
}

const BusinessContent = (props) => {
    const { title, children } = props;

    return (
        <>
            <div style={{
                borderBottom: "5px solid rgb(0, 0, 0)",
                marginBottom: 30
            }}
            >
                <div
                    className='text-2xl font-bold mb-2.5'
                    style={{
                        color: "rgba(0, 0, 0, 0.75)"
                    }}
                >
                    {title}
                </div>
            </div>
            <div>{children}</div>
        </>
    )
}

const InputControl = (props) => {
    const { onChange, value, placeholder, required, type, className } = props;

    return (
        <input
            style={{ height: 48 }}
            type={type ?? "text"}
            id="first_name"
            className={clsx(className, "bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500")}
            placeholder={placeholder}
            value={value}
            onChange={(e) => onChange(e.target.value)}
            required={required}
        />
    )
}

export default BusinessInfoContent;
