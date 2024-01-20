import Image from "next/image";


const blog_tiles = [
  {
    id: '3958dc9e-712f-4377-85e9-fec4b6a6442a',
    title: '10 Tips for Better Time Management',
    description: 'Learn how to boost your productivity and make the most of your time with these effective time management strategies.',
    image_url: 'https://images.unsplash.com/photo-1515378960530-7c0da6231fb1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    slug: 'time-management-tips'
  },
  {
    id: '3958dc9e-742f-4377-85e9-fec4b6a6442a',
    title: 'Healthy Eating Habits: A Beginners Guide',
    description: 'Discover the basics of maintaining a nutritious diet and building healthy eating habits from the ground up.',
    image_url: 'https://images.unsplash.com/photo-1497032628192-86f99bcd76bc?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    slug: 'healthy-eating-guide'
  },
  {
    id: '3958dc9e-737f-4377-85e9-fec4b6a6442a',
    title: 'The Art of Travel Photography: Capturing Memories Worldwide',
    description: '"Unlock the secrets to capturing stunning travel photos and preserving your memories from your adventures around the globe.',
    image_url: 'https://images.unsplash.com/photo-1544654803-b69140b285a1?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1470&q=80',
    slug: 'travel-photography-art'
  },
  {
    id: '50ca3e18-62cd-11ee-8c99-0242ac120002',
    title: 'Explore budget-friendly DIY home decor projects that can give your living space a fresh and stylish makeover.',
    description: 'steven@tey.com',
    image_url: 'https://images.unsplash.com/photo-1530099486328-e021101a494a?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1547&q=80',
    slug: 'diy-home-decor-ideas'
  },
]

export default function Home() {
  return (
    <>
    <header>
      <h1>This is an example homepage</h1>
    </header>

    <main className="flex min-h-screen flex-col items-center justify-between p-24">
    <section className="bg-white dark:bg-gray-900">
    <div className="container px-6 py-10 mx-auto">
        <h2 className="text-3xl font-semibold text-gray-800 capitalize lg:text-4xl dark:text-white">From the blog</h2>

        <div className="grid grid-cols-1 gap-8 mt-8 md:mt-16 md:grid-cols-2">
        {blog_tiles.map((item) => {
          return (
            <div className="lg:flex" key={item.id}>
                <img className="object-cover w-full h-56 rounded-lg lg:w-64" src={item.image_url} alt={item.title}/>
                <div className="flex flex-col justify-between py-6 lg:mx-6">
                    <a href="" className="text-xl font-semibold text-gray-800 hover:underline dark:text-white ">
                        {item.title}
                    </a>
                    
                    <span className="text-sm text-gray-500 dark:text-gray-300">{item.slug}</span>
                </div>
            </div>
            );
          })}
        </div>
    </div>
</section>
    </main>
    </>
  );
}
