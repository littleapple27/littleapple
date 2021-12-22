import Icon from "../../components/icon";
import flatIconsBlog from "../../images/flatIconsBlog.png";
import iconMatchBlog from "../../images/iconMatchBlog.png";
import springer from "../../images/springer.png";
const posts = [
    {
        title: 'Flat-Design Icon Sets: a Case for Universal Meaning',
        subtitle: '2020 International Conference on Applied Human Factors and Ergonomics | Advances in Usability and User Experience',
        href: 'https://www.researchgate.net/publication/339004734_Flat-Design_Icon_Sets_a_Case_for_Universal_Meanings',
        category: { name: 'Usability & User Experience', href: '#' },
        description:
            'In this paper, we focus on open-source typographic icon sets for the web (e.g., Font Awesome). Specifically, we investigate to what extent flat-design icons have acquired a universal meaning and we analyze human factors and design aspects that play a key role in icon recognition.',
        date: 'Jul 18, 2020',
        datetime: '2020-03-16',
        imageUrl: springer,
        readingTime: '6 min',
        author: {
            name: 'Andrea M. Legleiter & Nicholas Caporusso',
            href: '#'
        },
        icons: [
            {
                icon: 'researchgate',
                brand: true,
                linkTo: 'https://www.researchgate.net/publication/339004734_Flat-Design_Icon_Sets_a_Case_for_Universal_Meanings',
                target: '_blank'
            },
            {
                icon: 'github',
                brand: true,
                linkTo: 'https://github.com/littleapple27/case-for-universal-meanings',
                target: '_blank'
            }
        ]
    },
    {
        title: 'How well do you know your Font Awesome Icons?',
        subtitle: 'Acknowledged & Promoted by Dave Gandy, Founder of Font Awesome',
        href: 'https://littleapple27.dev/icon-match-game/index.php',
        category: { name: 'Usability & User Experience', href: '#' },
        description:
            'In our prelimiary study, we found significant differences between the symbols in the same set in terms of ambiguity, which we are currently exploring more extensively in a follow-up study. Participate by playing a fun, interactive game!',
        imageUrl: iconMatchBlog,
        date: 'Mar 18, 2020',
        datetime: '2020-03-16',
        readingTime: '4 min',
        author: {
            name: 'Play Now',
            href: 'https://littleapple27.dev/icon-match-game/index.php',
            imageUrl:
                'https://images.unsplash.com/photo-1550525811-e5869dd03032?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80',
        },
        icons: [
            {
                icon: 'gamepad',
                linkTo: 'https://littleapple27.dev/icon-match-game/index.php',
                target: '_blank'
            },
            {
                icon: 'twitter',
                brand: true,
                linkTo: 'https://twitter.com/fontawesome/status/1255516741255467016?ref_src=twsrc%5Etfw%7Ctwcamp%5Etweetembed%7Ctwterm%5E1255516741255467016%7Ctwgr%5E%7Ctwcon%5Es1_c10&ref_url=https%3A%2F%2Fpublish.twitter.com%2F%3Fquery%3Dhttps3A2F2Ftwitter.com2Ffontawesome2Fstatus2F1255516741255467016widget%3DTweet',
                target: '_blank'
            }
        ]
    },
    {
        title: '2020 International Conference on Applied Human Factors and Ergonomics',
        href: 'https://littleapple27.github.io/aloft/dock.html',
        category: { name: 'Conference Presentation', href: 'https://littleapple27.github.io/aloft/dock.html' },
        description:
            'Presnted at the Virtual meeting of the 2020 International Conference on Applied Human Factors and Ergonomics',
        date: 'July 2020',
        datetime: '2020-07-18',
        readingTime: '10 min',
        youtubeUrl: <iframe width="383" height="191"
            src="https://www.youtube.com/embed/sjWAdWMPcPM?rel=0&autoplay=1">
        </iframe>,
        icons: [
            {
                icon: 'youtube',
                brand: true,
                linkTo: "https://www.youtube.com/embed/sjWAdWMPcPM?rel=0&autoplay=1",
                dataRel: "lightcase"
            }
        ]
    },
]

let Portfolio = () => {
    return (
        <div className="relative bg-gray-50 pt-16 pb-20 px-4 sm:px-6 lg:pt-24 lg:pb-28 lg:px-8">
            <div className="absolute inset-0">
                <div className="bg-white h-1/3 sm:h-2/3" />
            </div>
            <div className="relative max-w-7xl mx-auto">
                <div className="text-center">
                    <h2 className="text-3xl tracking-tight font-extrabold text-gray-900 sm:text-4xl">UI/UX Research</h2>
                    <p className="mt-3 max-w-2xl mx-auto text-xl text-gray-500 sm:mt-4">
                        I have interests in usability and exploring the cross-generational effects of the web.
                    </p>
                </div>
                <div className="mt-12 max-w-lg mx-auto grid gap-5 lg:grid-cols-3 lg:max-w-none">
                    {posts.map((post) => (
                        <div key={post.title} className="flex flex-col rounded-lg shadow-lg overflow-hidden">
                            <div className="flex-shrink-0">
                                {post?.imageUrl ?
                                    (<img className="h-48 w-full object-cover" src={post.imageUrl} alt="" />) :
                                    post?.youtubeUrl}
                            </div>
                            <div className="flex-1 bg-white p-6 flex flex-col justify-between">
                                <div className="flex-1">
                                    <p className="text-sm font-medium text-indigo-600">
                                        <a href={post.category.href} className="hover:underline uppercase">
                                            {post.category.name}
                                        </a>
                                    </p>
                                    <a href={post.href} className="block mt-2">
                                        <p className="text-xl font-semibold text-gray-900 mb-3">{post.title}</p>
                                        <p className="text-sm font-light text-gray-500">{post.subtitle}</p>
                                        <p className="mt-3 text-base text-gray-500">{post.description}</p>
                                    </a>
                                </div>
                                <div className="mt-6 flex items-center">
                                    <div className="flex">
                                        {post?.icons?.map((icon) => (
                                            <Icon key={icon?.icon} size={'lg'} {...icon} classNames={'text-indigo-500 hover:text-indigo-700'} />
                                        ))}
                                    </div>
                                    <div className="ml-3">
                                        <p className="text-sm font-medium text-gray-900">
                                            <a href={post?.author?.href} className="hover:underline">
                                                {post?.author?.name}
                                            </a>
                                        </p>
                                        <div className="flex space-x-1 text-sm text-gray-500">
                                            <time dateTime={post?.datetime}>{post?.date}</time>
                                            <span aria-hidden="true">&middot;</span>
                                            <span>{post?.readingTime} read</span>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    )
}

export default Portfolio;