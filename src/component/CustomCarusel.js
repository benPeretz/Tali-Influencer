import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';


function CustomCarousel({list}) {

    //Getting props info the list for the carousel, it could be cards images and more..
    //we cheking the length of the list, if is less than 4 we want the carousel to be with the same items number and not customize to bigger num of items
    const numberOfItems = list.length;

    console.log(list);
    console.log(list.length);

    const responsiveConfig = {
    //   desktop: { breakpoint: { max: 3000, min: 1024 }, items: Math.min(numberOfItems, 4) },//if the list item is < 4 i want to treat like i have 
    //   tablet: { breakpoint: { max: 1200, min: 800 }, items: Math.min(numberOfItems, 3) },//the number of item and not like i have 4 and put 3 (it's not looking good)
    //   tablet2: { breakpoint: { max: 800, min: 500 }, items: Math.min(numberOfItems, 2) },
    //   mobile: { breakpoint: { max: 500, min: 0 }, items: Math.min(numberOfItems, 1) }

      all: {
        breakpoint: { max: 4000, min: 0 },
        items: 1
    }
    };
  
    return <Carousel responsive={responsiveConfig}>
{list}
    
    </Carousel>;
  }

export default CustomCarousel;