import Image from "next/image";
import PropertyList from "../components/properties/propertyList";

const MyPropertiesPage = () => {
    return(
        <main className="max-w-[1500px] mx-auto px-6 pb-6">
            <div className="pt-6 pb-2">
                <h1 className="my-6 text-2xl">My Venues</h1>
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                      <PropertyList />
                </div>
            </div>
        </main>
    )
}

export default MyPropertiesPage;