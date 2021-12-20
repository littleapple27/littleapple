import FaIcon from "../../components/faIcon";
let TechCloud = () => {
    const iconStack = [
        { icon: 'react', brand: true },
        { icon: 'html5', brand: true },
        { icon: 'css3', brand: true },
        { icon: 'bootstrap', brand: true },
        { icon: 'sass', brand: true },
        { icon: 'js-square', brand: true },
        { icon: 'angular', brand: true },
        { icon: 'node-js', brand: true },
        { icon: 'npm', brand: true },
        { icon: 'php', brand: true },
        { icon: 'git-alt', brand: true },
        { icon: 'github', brand: true },
    ]
    return (
        <div className="bg-gray-100">
            <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
                <p className="text-center text-sm font-semibold uppercase text-gray-500 tracking-wide">
                    Technical Profile
                </p>
                <div className="mt-6 flex flex-wrap justify-evenly">
                    {iconStack.map((item) => (
                        < FaIcon key={item.icon} size={'4x'} color={'gray-500'} brand={item.brand} icon={item.icon} />
                    ))}
                </div>
            </div>
        </div>
    )
}

export default TechCloud;
