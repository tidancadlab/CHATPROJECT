function DataInp({typ, placeholder, id, label, getUserData}) {
    return ( 
        <>
        <div className="flex flex-col">
        <label htmlFor={id} className="text-start">{label}</label>
        <input title={placeholder} onChange={getUserData} id={id} className="h-[44px] w-full mt-[6px] mb-2 border outline-none border-black rounded-lg px-2" type={typ} placeholder={placeholder} required autoComplete="off"/>
        </div>
        </>
     );
}

export default DataInp;