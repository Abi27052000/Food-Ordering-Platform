import landingImage from "../assets/landing.png";
import appDownloadImage from "../assets/appDownload.png";
import SearchBar, { SearchForm } from "@/components/SearchBar";
import { useNavigate } from "react-router-dom";

const HomePage = () => {
  const navigate = useNavigate();

  const handleSearchSubmit = (searchFormValues: SearchForm) => {
    navigate({
      pathname: `/search/${searchFormValues.searchQuery}`,
    });
  };

  return (
    <div className="flex flex-col gap-12">
      <div className="md:px-32 bg-white rounded-lg shadow-md py-8 flex flex-col gap-5 text-center -my-16">
        <h1 className="text-5xl font-bold tracking-tight text-orange-600">
          Tuck Into Takeway Today

        </h1>
        <span className="text-xl">Food Is Just A Click Away!</span>
        <SearchBar placeHolder="Search by City or Town" onSubmit={handleSearchSubmit}/>

      </div>
      <div className="grid md:grid-cols-2 gap-5">
        <img src={landingImage} alt="landingImage" />
        <div className='flex flex-col items-center justify-center gap-4 text-center'>
          <span className='font-bold text-3xl tracking-tighter'>
            Order Takeway Even Faster

          </span>
          <span>
            Download The MernEats App For Faster Ordering And Personalized Recommendations
          </span>
          <img src={appDownloadImage} alt="appDownloadImage" />

        </div>

      </div>

      
    </div>
  )
}

export default HomePage
