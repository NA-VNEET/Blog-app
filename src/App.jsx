import React from 'react';

// Card Component
const BlogPostCard = ({ 
  image, 
  tag,
  title,
  content,
  date,
  views
}) => {
  return (
    <div className="max-w-2xl rounded-lg overflow-hidden shadow-lg bg-white hover:shadow-2xl hover:translate-y-3 hover:scale-105 cursor-pointer transition-shadow transition-all duration-300">
      <div className="relative">
        <img 
          src={image} 
          alt="Blog post" 
          className="w-full h-64 object-cover"
        />
      </div>
      
      <div className="p-6">
        <div className="text-blue-500 text-sm font-medium mb-2 flex items-center gap-1">
          <span>🏷️</span> {}
          {tag}
        </div>
        
        <h2 className="text-xl font-bold text-gray-900 mb-3">
          {title}
        </h2>
        
        <p className="text-gray-500 text-sm mb-4 line-clamp-2">
          {content}
        </p>
        
        <div className="flex items-center justify-between text-gray-500 text-sm">
          <div className="flex items-center space-x-2">
            <span>🕒</span> {}
            <span>{date}</span>
          </div>
          
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-1">
              <span>👁️</span> {}
              <span>{views} views</span>
            </div>
            
            <div className="flex items-center space-x-1 cursor-pointer hover:text-gray-700 transition-colors">
              <span>↗️</span> {}
              <span>SHARE</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

const App = () => {
  const blogPosts = [
    {
      id: 1,
      image: "https://imgs.search.brave.com/FX4C7eSrRszZ29BV65s-_3ZFiQYhmTbAH5pQDooCU_w/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdGF0/aWMuYm9yZWRwYW5k/YS5jb20vYmxvZy93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMC8w/NC8yNS01ZThjNDE0/M2JlNzBjX184ODAu/anBn",
      tag: "#Nature",
      title: "JUPITER IS FULL OF WATERFALLS SO EARLY",
      content: "Vestibulum suscipit nibh sed odio pharetra, condimentum lacinia nisi varius. Ut ac ornare diam. Suspendisse vitae quam risus.",
      date: "JANUARY 15, 2025",
      views: "27"
    },
    {
      id: 2,
      image: "https://imgs.search.brave.com/dJCivGJbZAKRUTZ8APkTmuhv1RfzZtlcZg6VymXeAbY/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zYWdl/dW5pdmVyc2l0eS5l/ZHUuaW4vYXNzZXRz/L2ltYWdlcy9ibG9n/L3RoZS1mdXR1cmUt/b2YtYXJ0aWZpY2lh/bC1pbnRlbGxpZ2Vu/Y2UuanBn",
      tag: "#Technology",
      title: "THE FUTURE OF ARTIFICIAL INTELLIGENCE",
      content: "Exploring the latest developments in AI and machine learning, and their potential impact on society.",
      date: "SEPTEMBER 16, 2022",
      views: "156"
    },
    {
      id: 3,
      image: "https://imgs.search.brave.com/H5SfaK2PpbuGlFVMV02z0US-eeKRFMHyI1H1rZnWgkg/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMucHJlc3RpZ2Vv/bmxpbmUuY29tL3dw/LWNvbnRlbnQvdXBs/b2Fkcy9zaXRlcy81/LzIwMjIvMDQvMjAx/MjA3MzEvYmVuLXBl/YWNvYy11bnNwbGFz/aC1IZXJvLXJlc2l6/ZWQtMTYwMHg4NzMu/anBn",
      tag: "#Travel",
      title: "HIDDEN GEMS OF SOUTHEAST ASIA",
      content: "Discovering unexplored destinations and cultural treasures in the heart of Southeast Asia.",
      date: "OCTOBER 17, 2018",
      views: "89"
    },
    {
      id: 4,
      image: "https://imgs.search.brave.com/5HsXsGgrO9RyhvXLMZjxpMEx1UU_KcMBMhO8xZOX1U4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pdGFs/eWN1bGluYXJ5aG9s/aWRheS5jb20vd3At/Y29udGVudC91cGxv/YWRzLzIwMTUvMDQv/Q2FzYV9ncmVnb3Jp/b0xlc3Nvbi5qcGc",
      tag: "#Food",
      title: "CULINARY ADVENTURES IN ITALY",
      content: "A journey through the traditional flavors and cooking techniques of different Italian regions.",
      date: "April 18, 2020",
      views: "234"
    },
    {
      id: 5,
      image: "https://imgs.search.brave.com/tC9be0WmtCllqecp1oDEvgF_eq_2nNZcpomJZ8dLhKk/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9pbWFn/ZXMubmV3c2NpZW50/aXN0LmNvbS93cC1j/b250ZW50L3VwbG9h/ZHMvMjAxOS8wNy8x/OTEwMDMwNS9xdWFu/dHVtX21lY2hhbmlj/c3drMzk0eS5qcGc",
      tag: "#Science",
      title: "EXPLORING QUANTUM MECHANICS",
      content: "Understanding the fundamental principles of quantum physics and its applications in modern technology.",
      date: "MARCH 19, 2023",
      views: "178"
    },
    {
      id: 6,
      image: "https://imgs.search.brave.com/cAGfOh14-nuIlRBhfmbM9RuvEzTMNUbV4MMXepk5esQ/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9tZWRp/YS5saWNkbi5jb20v/ZG1zL2ltYWdlL0Q1/NjEyQVFGbS1JaTVo/VUw0SncvYXJ0aWNs/ZS1jb3Zlcl9pbWFn/ZS1zaHJpbmtfNzIw/XzEyODAvMC8xNzEw/MTc3Mzg2NjY5P2U9/MjE0NzQ4MzY0NyZ2/PWJldGEmdD1SSWti/X1NHLUtJZm9OQzEz/aV9sYldDbXFqa0cy/c1VTcnQ0R2hlYjN3/UHZF.jpeg",
      tag: "#Art",
      title: "MODERN ART IN THE DIGITAL AGE",
      content: "How digital technologies are transforming the creation and perception of contemporary art.",
      date: "DECEMBER 20, 2023",
      views: "145"
    },
    {
      id: 7,
      image: "https://imgs.search.brave.com/s9A8qqsWJPnBetL7XHYi7bnSBtWgKfCkwtTd_u3fkU4/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/aGVhcnQub3JnLy0v/bWVkaWEvQUhBL0g0/R00vQXJ0aWNsZS1J/bWFnZXMvbWVkaXRh/dGlvbi5wbmc",
      tag: "#Health",
      title: "MINDFULNESS AND MENTAL WELLNESS",
      content: "Practical approaches to maintaining mental health through mindfulness and meditation practices.",
      date: "MAY 21, 2024",
      views: "312"
    },
    {
      id: 8,
      image: "https://imgs.search.brave.com/aoPeGhMBygB7yqZHMBACHvE3m4XfX8qazH2rrLCcf7g/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly9zdXN0/YWluYWJpbGl0eS1z/dWNjZXNzLmNvbS93/cC1jb250ZW50L3Vw/bG9hZHMvMjAyMi8w/OS9TdXN0YWluYWJs/ZS1idXNpbmVzcy1w/cmFjdGljZXMucG5n",
      tag: "#Business",
      title: "SUSTAINABLE BUSINESS PRACTICES",
      content: "How companies are incorporating environmental responsibility into their business models.",
      date: "MARCH 22, 2022",
      views: "198"
    },
    {
      id: 9,
      image: "https://imgs.search.brave.com/t3VN_LPiJpSoZ1MRMB87O84M5wzb3z9Nmi6rmSEg8LI/rs:fit:500:0:0:0/g:ce/aHR0cHM6Ly93d3cu/YnVnemludGhlYXR0/aWMuY28udWsvd3At/Y29udGVudC91cGxv/YWRzLzIwMjAvMTEv/UmVhc29ucy10by1o/aXJlLWEtREotZm9y/LWEtY29ycG9yYXRl/LWV2ZW50LTY2MHg0/MDBAMngtMS03OTV4/Mzg1LmpwZw",
      tag: "#Music",
      title: "THE EVOLUTION OF ELECTRONIC MUSIC",
      content: "Tracing the development of electronic music from its origins to contemporary trends.",
      date: "MARCH 23, 2023",
      views: "267"
    },
    
  ];

  return (
    <div className="min-h-screen bg-gray-100 py-12 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto">
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-gray-900 mb-4">Blog Posts</h1>
          <p className="text-gray-600">Latest updates from our blog</p>
        </header>

        <div className="grid gap-8 md:grid-cols-2 lg:grid-cols-3">
          {blogPosts.map((post) => (
            <BlogPostCard
              key={post.id}
              image={post.image}
              tag={post.tag}
              title={post.title}
              content={post.content}
              date={post.date}
              views={post.views}
            />
          ))}
        </div>
      </div>
    </div>
  );
};

export default App;