import { useDispatch, useSelector } from 'react-redux';
import { addItem } from '../../store/cartSlice';
import { useState, useEffect } from 'react';
import axios from 'axios';

import Button from './button';

const ItemCard = (props) => {
  const [courses, setCourses] = useState([]);
  const cartItems = useSelector((state) => state.cart.items);
  
  useEffect(() => {
    function getCourses() {
      axios
        .get('http://localhost:4001/api/courses')
        .then((res) => {
          console.log(res.data);
          setCourses(res.data);
        })
        .catch((err) => {
          alert(err.message);
        });
    }

    getCourses();
  }, []);

  const dispatch = useDispatch();

  const handleAddToCart = (course) => {
    dispatch(addItem(course));
  };

  const isAddedToCart = (course) => {
    return cartItems.some((item) => item._id === course._id);
  };

  return (
    <div className="flex flex-wrap">
      {courses.map((course, index) => (
        <div
          key={index}
          className="w-1/2 sm:w-1/3 md:w-1/4 lg:w-1/6 xl:w-1/6 p-2"
        >
          <div className="flex flex-col overflow-hidden rounded-lg border border-gray-100 bg-white shadow-md">
            <a
              className="relative flex h-60 overflow-hidden rounded-xl"
              href="#"
            >
              <img
                className="object-cover w-full"
                src="https://lk.spaceylon.com/wp-content/uploads/2020/11/tt_vit_c_glow_all_day_protector_3.jpg"
                alt="course image"
              />
            </a>
            <div className="mt-4 px-5 pb-5">
              <a href="#">
                <h5 className="text-md tracking-tight text-slate-900">
                  {course.course_name}
                </h5>
              </a>
              <div className="mt-2 mb-5 flex items-center justify-between">
                <p>
                  <span className="text-lg font-bold text-slate-900">
                    ${course.course_price}
                  </span>
                </p>
              </div>
              {!isAddedToCart(course) ? (
                <Button
                  onClick={() => {
                    handleAddToCart(course);
                  }}
                  className="flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium  focus:outline-none focus:ring-4 focus:ring-green-300 add-to-cart-btn"
                >
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="mr-2 h-6 w-6"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    strokeWidth={2}
                  >
                    {/* Add to cart icon */}
                  </svg>
                  Add to cart
                </Button>
              ) : (
                <Button
                  className="flex items-center justify-center rounded-md px-5 py-2.5 text-center text-sm font-medium  focus:outline-none focus:ring-4 focus:ring-green-300 added-to-cart-btn2"
                  disabled
                >
                  Added to cart
                </Button>
              )}
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ItemCard;
