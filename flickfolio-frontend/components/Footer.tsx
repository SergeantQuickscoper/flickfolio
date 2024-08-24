const Footer = () => {
    return(
        <footer className="h-96 bg-secondaryBackground relative z-100 ">
        <div className="flex flex-row justify-center h-full w-full pt-16">
          <div>
              <h1 className="text-xl text-white font-bold">A website by Don Chacko</h1>
              <div className="flex flex-row mt-2">
                  <img src="Instagram.svg"/>
                  <img src="GitHub.svg" className="px-4"/>
                  <img src="Linkedin.svg"/>
              </div>

          </div>
          <div className="w-[1px] bg-white h-72 mx-48">

          </div>
          <div>
              <h1 className="text-xl text-white font-bold">Movies</h1>
              <div className=" font-light pt-4 text-white">
                  <h2 className="py-4">Top Rated</h2>
                  <h2 className="py-4">Trending</h2>
                  <h2 className="py-4">In Theaters</h2>
                  <h2 className="py-4">Movie Search</h2>
              </div>
          </div>
          <div className="w-[1px] bg-white h-72 mx-48">

          </div>
          <div>
              <h1 className="text-xl text-white font-bold">Social</h1>
              <div className=" font-light pt-4 text-white">
                  <h2 className="py-4">Top Rated</h2>
                  <h2 className="py-4">Trending</h2>
                  <h2 className="py-4">In Theaters</h2>
                  <h2 className="py-4">Movie Search</h2>
              </div>
          </div>
        </div>
      </footer>
    )
}

export default Footer;