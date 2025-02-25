import Image from "next/image";

const Hero = () => {
    return (<section className="w-full py-20 px-6 text-center md:text-left">
        <div className="wrapper max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
            <div className="max-w-2xl">
                <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900">
                    Teach with Confidence.  
                    <span className="text-blue-600"> Engage Every Learner.</span>
                </h1>
                <p className="mt-4 text-lg text-gray-700">
                    Download expertly crafted <strong>ESL lesson plans</strong> designed to make teaching <strong>easier, effective, and engaging</strong>. 
                    Save time and help students succeed!
                </p>
                <div className="mt-6 flex flex-col sm:flex-row gap-4">
                    <a href="/lessons" className="px-6 py-3 bg-blue-600 text-white rounded-lg font-medium hover:bg-blue-700">
                        Browse Lesson Plans
                    </a>
                    <a href="/about" className="px-6 py-3 border border-blue-600 text-blue-600 rounded-lg font-medium hover:bg-blue-100">
                        Learn More
                    </a>
                </div>
            </div>

            <div className="">
                <Image
                    src="https://images.unsplash.com/photo-1544717305-2782549b5136?q=80&w=1374&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
                    alt="Teacher in a classroom" 
                    className="w-full"
                    width={400}
                    height={800}
                />
            </div>
        </div>
      </section>);
}
 
export default Hero;