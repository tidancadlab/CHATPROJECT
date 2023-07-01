import "./Options.css"
function HomeOption() {
    return ( 
        <>
        <div className="min-w-full bg-gray-400 homeOptionsCSS  snap-always snap-center">
        <input type="file" accept="image/*" capture="environment" />
        </div>
        </>
     );
}

export default HomeOption;